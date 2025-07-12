import { Spin } from "antd";
import clsx from "clsx";
import { LoadingOutlined } from "@ant-design/icons";
interface ICTAButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  loadingSize?: number;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CTAButton = ({
  className,
  loading,
  loadingSize,
  children,
  onClick,
  ...props
}: ICTAButton) => {
  return (
    <button
      className={clsx(
        className,
        "w-full font-Yekan-Regular bg-light-primary hover:bg-light-primary-hover disabled:bg-light-primary-disabled text-light-primary-text rounded-[8px] h-full text-[16px] flex items-center justify-center active:scale-95 transition-all"
      )}
      {...props}
      onClick={onClick}
    >
      {children}
      {loading && (
        <Spin
          indicator={
            <LoadingOutlined
              spin
              style={{
                fontSize: loadingSize,
              }}
            />
          }
        />
      )}
    </button>
  );
};

export default CTAButton;
