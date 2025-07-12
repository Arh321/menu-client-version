import { lazyWithFallback } from "@/components/shared-components/lazyWithFallback/lazyWithFallback";
import { LoadingOutlined } from "@ant-design/icons";

const DynamicOptionsContainer = lazyWithFallback(
  () =>
    import(
      "@/components/page-components/splite-components/options-components/options-container"
    ),
  {
    fallback: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-max h-max block text-4xl text-light-secondary-text">
          <LoadingOutlined />
        </span>
      </div>
    ),
  }
);

const DynamicParticipantsComponent = lazyWithFallback(
  () =>
    import(
      "@/components/page-components/splite-components/participants-components/participants-container"
    ),
  {
    fallback: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-max h-max block text-4xl text-light-secondary-text">
          <LoadingOutlined />
        </span>
      </div>
    ),
  }
);

const DynamicResultComponent = lazyWithFallback(
  () =>
    import(
      "@/components/page-components/splite-components/result-component/result-component"
    ),
  {
    fallback: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-max h-max block text-4xl text-light-secondary-text">
          <LoadingOutlined />
        </span>
      </div>
    ),
  }
);

export {
  DynamicOptionsContainer,
  DynamicParticipantsComponent,
  DynamicResultComponent,
};
// You can now use these dynamic components in your application
