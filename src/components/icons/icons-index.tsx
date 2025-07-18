export interface MenuSharedIconsProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  iconActive?: boolean;
  iconActiveColor?: string;
}
import ContactOutlineIcon from "./contactOutlineIcon/contactOutlineIcon";
import ClockIcon from "./clockIcon/clockIcon";
import SocialIcon from "./socialIcon/socialIcon";
import MapIcon from "./mapIcon/mapIcon";
import EditIcon from "./editIcon/editIcon";

export { ContactOutlineIcon, ClockIcon, SocialIcon, MapIcon, EditIcon };
