import { MenuSharedIconsProps } from "../icons-index";

const MapIcon: React.FC<MenuSharedIconsProps> = ({
  width = "14",
  height = "8",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
      </g>
    </svg>
  );
};

export default MapIcon;
