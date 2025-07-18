import { queryClient } from "@/components/providers/queryClient";
import { getCompanies } from "@/services/companyService";

let isRootDataLoaded = false;
export const rootLoader = async () => {
  if (isRootDataLoaded) {
    return null; // دیتا قبلا لود شده، دیگه کاری نکن
  }

  try {
    await queryClient.ensureQueryData({
      queryKey: ["companies"],
      queryFn: () => getCompanies(),
    });
    isRootDataLoaded = true; // بعد از لود شدن، فلگ رو true کن
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const status = error?.response?.status || 500;
    const message =
      status === 401
        ? "دسترسی غیرمجاز"
        : status === 404
        ? "منبع یافت نشد"
        : "خطایی در دریافت اطلاعات رخ داده است";

    throw {
      status,
      data: { message },
    };
  }

  return null;
};
