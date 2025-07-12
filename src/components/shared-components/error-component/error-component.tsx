import { RedoOutlined } from "@ant-design/icons";
import { Alert } from "antd";

interface ErrorComponentProps {
  refetch: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ refetch }) => {
  return (
    <div className="font-Regular relative font-Yekan-Regular">
      <Alert
        message="خطا"
        description="در بارگذاری اطلاعات خطایی رخ داده است"
        type="error"
        className="!font-Yekan-Medium"
        showIcon
      />
      <button
        onClick={() => refetch()}
        className="absolute left-2 top-2 w-max h-max"
      >
        <RedoOutlined />
      </button>
    </div>
  );
};

export default ErrorComponent;
