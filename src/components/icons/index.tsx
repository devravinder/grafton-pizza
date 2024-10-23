import { SVGProps } from "react";
import IconBxlLinkedin from "./IconBxlLinkedin";
import IconClock from "./IconClock";
import IconEmailOutline from "./IconEmailOutline";
import IconIconCall from "./IconIconCall";
import IconLocationOutline from "./IconLocationOutline";
import IconLogoFacebook from "./IconLogoFacebook";
import IconLogoInstagram from "./IconLogoInstagram";
import IconLogoTiktok from "./IconLogoTiktok";
import IconLogoTwitter from "./IconLogoTwitter";
import IconSnapchat from "./IconSnapchat";
import IconYoutube from "./IconYoutube";
import IconWeb from "./IconWeb";
import IconMenu from "./IconMenu";
import IconClose from "./IconClose";

export type SvgIcon = (props: SVGProps<SVGSVGElement>) => Element;

// eslint-disable-next-line react-refresh/only-export-components
export const Icons = {
  Call: IconIconCall,
  Location: IconLocationOutline,
  Clock: IconClock,
  Email: IconEmailOutline,
  Facebook: IconLogoFacebook,
  Instagram: IconLogoInstagram,
  Twitter: IconLogoTwitter,
  Tiktok: IconLogoTiktok,
  Youtube: IconYoutube,
  Snapchat: IconSnapchat,
  Linkedin: IconBxlLinkedin,
  Web: IconWeb,
  Menu: IconMenu,
  Close: IconClose,
};

export default Icons;
