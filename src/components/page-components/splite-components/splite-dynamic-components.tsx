import { LoadingOutlined } from "@ant-design/icons";

const DynamicOptionsContainer = dynamic(
  () =>
    import(
      "@/components/page-components/splite-components/options-components/options-container"
    ),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-max h-max block text-4xl text-light-secondary-text">
          <LoadingOutlined />
        </span>
      </div>
    ),
  }
);

const DynamicParticipantsComponent = dynamic(
  () =>
    import(
      "@/components/page-components/splite-components/participants-components/participants-container"
    ),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-max h-max block text-4xl text-light-secondary-text">
          <LoadingOutlined />
        </span>
      </div>
    ),
  }
);

const DynamicResultComponent = dynamic(
  () =>
    import(
      "@/components/page-components/splite-components/result-component/result-component"
    ),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => (
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
