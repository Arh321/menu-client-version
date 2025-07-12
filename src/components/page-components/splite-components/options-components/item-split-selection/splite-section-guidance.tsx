import React from "react";
import type { TourProps } from "antd";
import { Tour } from "antd";
import clsx from "clsx";

interface SplitSectionGuidanceProps {
  ref1: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  ref2: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  ref3: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  setOpenGuidance: React.Dispatch<React.SetStateAction<boolean>>;
  openGuidance: boolean;
}

const SplitSectionGuidance: React.FC<SplitSectionGuidanceProps> = ({
  ref1,
  ref2,
  ref3,
  openGuidance,
  setOpenGuidance,
}) => {
  const stepsClassName =
    "[&_.ant-tour-content]:!flex [&_.ant-tour-content]:justify-center [&_.ant-tour-inner]:!bg-light-text [&_.ant-tour-close]:!text-light-text-text [&_.ant-tour-inner]:!text-light-secondary-text [&_.ant-tour-inner]:backdrop-blur-sm [&_.ant-tour-inner]:!font-Yekan-Regular [&_.ant-tour-inner]:!w-[80%] [&_.ant-tour-title]:!font-[300] [&_.ant-tour-title]:font-Yekan-Medium [&_.ant-tour-title]:!text-lg";
  const steps: TourProps["steps"] = [
    {
      title: "تقسیم بندی رو شروع کن",
      description: (
        <div className="text-right leading-loose space-y-3 font-Yekan-Light text-sm">
          <p>
            اینجا می‌تونی خیلی راحت و سریع، آیتم‌ها رو بین دوستات تقسیم کنی. فقط
            کافیه اسم هر دوستی رو بگیری و بندازیش روی آیتمی که باهاش شریک شده!
            ✨
          </p>
          <p>
            🔁 هر بار که یه نفر رو روی یه آیتم بندازی، یعنی یه سهم از اون آیتم
            رو برداشته. می‌تونی یک نفر رو چند بار روی یه آیتم بندازی تا تعداد
            سهمش بیشتر بشه.
          </p>
          <div className="bg-light-primary/10 p-3 rounded-xl text-[13px] space-y-1 border !border-light-primary/20 !text-light-secondary-text">
            <p className="font-Yekan-Medium">🧠 مثال واقعی:</p>
            <p>مثلاً یه پیتزا سفارش دادین 🍕 و «علی» خیلی گرسنه‌س:</p>
            <p>• یه بار علی رو روی پیتزا بندازی → یه سهم برای علی</p>
            <p>• سه بار بندازیش → علی کل پیتزا رو خورده 😅</p>
          </div>
        </div>
      ),
      target: null,
      className: stepsClassName,
      nextButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300]",
        children: "بزن بریم",
      },
      mask: {
        style: {
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          background: "rgba(0, 0, 0, 0.5)",
        },
        color: "rgba(0, 0, 0, 0.5)",
      },
    },
    {
      title: "اول رفیقت رو انتخاب کن",
      description:
        "اینجا می‌تونی از بین دوستات یکی رو انتخاب کنی. فقط کافیه اسمش رو بگیری و بکشیش (Drag کن)، درست مثل انتخاب یه یار قدیمی برای شام!",
      target: () => ref1.current!,
      className: stepsClassName,
      prevButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300] !border-none",
        children: "قبلی",
      },
      nextButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300]",
        children: "بعدی",
      },
    },
    {
      title: "حالا آیتم‌ رو بده بهش!",
      description:
        "فردی که انتخاب کردی رو بکش و بنداز روی هر آیتمی که می‌خوای بهش اختصاص بدی. خیلی راحت، مثل انداختن یه سیب‌زمینی توی بشقاب کسی 😉",
      className: clsx(stepsClassName),
      target: () => ref2.current!,
      prevButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300] !border-none",
        children: "قبلی",
      },
      nextButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300]",
        children: "بعدی",
      },
    },
    {
      title: "یه نگاه به تقسیم بنداز",
      description:
        "تقسیمت تموم شد؟ اینجاست که می‌تونی نتیجه نهایی رو ببینی و مطمئن شی که همه‌چی بین دوستات منصفانه پخش شده. 😇",
      className: stepsClassName,
      target: () => ref3.current!,
      prevButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300] !border-none",
        children: "قبلی",
      },
      nextButtonProps: {
        className:
          "!bg-light-primary !text-light-primary-text !font-Yekan-Medium [&_span]:!font-[300]",
        children: "تمام شد",
      },
    },
  ];

  React.useEffect(() => {
    if (ref1.current && ref2.current && ref3.current) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setOpenGuidance(true);
        }, 300); // این ۳۰۰ میل‌ثانیه اختیاریه، UX بهتر
      });
    }
    return () => setOpenGuidance(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref1, ref2, ref3]);

  return (
    <Tour
      open={openGuidance}
      onClose={() => setOpenGuidance(false)}
      steps={steps}
      indicatorsRender={(current, total) => {
        return (
          <span>
            {current + 1} / {total}
          </span>
        );
      }}
      disabledInteraction={true}
      mask={{
        color: "rgba(0, 0, 0, 0.5)",
        // style: {
        //   backdropFilter: "blur(5px)",
        //   WebkitBackdropFilter: "blur(5px)",
        // },
      }}
      rootClassName="w-full [&_rect]:fill-black/90"
    />
  );
};

export default SplitSectionGuidance;
