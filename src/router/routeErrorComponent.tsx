import CTAButton from "@/components/shared-components/cta-button/cta-button";

import { Result } from "antd";
import { useRouteError } from "react-router";

export default function RouteErrorComponent() {
  const error = useRouteError() as {
    status?: number;
    data?: { message?: string };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const status = error?.status || (500 as any);
  const message = error?.data?.message || "خطای ناشناخته‌ای رخ داده است.";

  return (
    <Result
      status={status ?? "404"}
      title={status ?? "404"}
      subTitle={message ?? "متاسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد."}
      extra={
        <CTAButton
          className="text-sm !p-2 w-max h-max !bg-light-primary"
          onClick={() => window.location.reload()}
        >
          تلاش مجدد
        </CTAButton>
      }
      className="w-full [&_.ant-result-extra]:flex [&_.ant-result-extra]:justify-center !font-Yekan-Medium"
    />
  );
}
