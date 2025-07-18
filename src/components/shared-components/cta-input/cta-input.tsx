import { Input } from "antd";
import clsx from "clsx";

interface ICTAInput {
  placeholder: string;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  haveBorder?: boolean;
  value?: string;
  style?: React.CSSProperties;
}

const CTAInput = ({
  placeholder,
  className,
  prefix,
  suffix,
  onChange,
  onPressEnter,
  haveBorder = true,
  value,
  style,
}: ICTAInput) => {
  return (
    <Input
      placeholder={placeholder}
      className={clsx(
        className,
        "!bg-transparent border-light-primary focus-within:!border-light-primary hover:!border-light-primary"
      )}
      classNames={{
        input: clsx(
          "!bg-transparent rounded-[8px] h-[30px] lxs:h-[34px] xs:h-[38px] text-[14px] lxs:text-[16px] xs:text-[18px] flex items-center justify-center transition-all !text-gray-100 placeholder:!text-gray-500 placeholder:text-base !font-Yekan-Regular",
          haveBorder
            ? "border-light-primary focus-within:!border-light-primary hover:!border-light-primary"
            : "!border-none !shadow-none"
        ),
        prefix: "text-light-primary-text",
        suffix: "text-light-primary-text",
      }}
      style={style}
      prefix={prefix}
      suffix={suffix}
      onChange={onChange}
      onPressEnter={onPressEnter}
      value={value}
    />
  );
};

export default CTAInput;
