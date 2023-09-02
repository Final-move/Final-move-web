import LogoImage from "../assets/media/images/logo/final move logo.jpg";
import {
  FaInstagramSquare,
  FaInstagram,
  FaWhatsappSquare,
  FaWhatsapp,
  FaFacebookSquare,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export const routeName = {
  home: "/",
  about: "/about",
  blog: "/blog",
  resources: "/resources",
  contact: "/contact",
};

export const pageLinks = [
  {
    label: "Home",
    link: routeName.home,
    id: 1,
  },
  {
    label: "About",
    link: routeName.about,
    id: 2,
  },
  {
    label: "Blog",
    link: routeName.blog,
    id: 3,
  },
  {
    label: "Resources",
    link: routeName.resources,
    id: 4,
  },
  {
    label: "Contact",
    link: routeName.contact,
    id: 5,
  },
];

export const mobileNavSocialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "/",
    label: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "/",
    label: "Instagram",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: "/",
    label: "Whatsapp",
  },
  {
    id: 3,
    icon: <FaTiktok />,
    link: "/",
    label: "Tiktok",
  },
];

export const contacts = {
  email: "info@signfireman.com",
  mobileNumber: "+(234) 8100000011",
  address: "Lagos, Nigeria",
};

export const footerContact = [
  {
    id: 1,
    icon: "",
    url: "/",
    text: contacts.email,
  },
  {
    id: 2,
    icon: "",
    url: "/",
    text: contacts.mobileNumber,
  },
  {
    id: 3,
    icon: "",
    url: "/",
    text: contacts.address,
  },
];

export const footerSocialLinks = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    link: "/",
    label: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagramSquare />,
    link: "/",
    label: "Instagram",
  },
  {
    id: 3,
    icon: <FaWhatsappSquare />,
    link: "/",
    label: "Whatsapp",
  },
];

export const images = {
  logo: LogoImage,
};
