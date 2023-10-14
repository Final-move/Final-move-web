import LogoImage from "../assets/media/images/logo/final move logo.jpg";
import errorImg from "../assets/media/images/404-anime.json";
import searchImg from "../assets/media/images/search-banner.jpg";
import contactImg from "../assets/media/images/contact-banner.jpg";

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

export const contactLinks = {
  email: "info@signfireman.com",
  mobileNumber: "+(234) 8100000011",
  address: "Lagos, Nigeria",
};

export const footerContact = [
  {
    id: 1,
    icon: "",
    url: "/",
    text: contactLinks.email,
  },
  {
    id: 2,
    icon: "",
    url: "/",
    text: contactLinks.mobileNumber,
  },
  {
    id: 3,
    icon: "",
    url: "/",
    text: contactLinks.address,
  },
];

export const socialLinks = {
  facebook: `/`,
  instagram: `/`,
  whatsapp: `/`,
  tiktok: `/`,
  twitter: `/`,
};

export const mobileNavSocialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: socialLinks.facebook,
    label: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: socialLinks.instagram,
    label: "Instagram",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: socialLinks.whatsapp,
    label: "Whatsapp",
  },
  {
    id: 3,
    icon: <FaTiktok />,
    link: socialLinks.tiktok,
    label: "Tiktok",
  },
];

export const footerSocialLinks = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    link: socialLinks.facebook,
    label: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagramSquare />,
    link: socialLinks.instagram,
    label: "Instagram",
  },
  {
    id: 3,
    icon: <FaWhatsappSquare />,
    link: socialLinks.whatsapp,
    label: "Whatsapp",
  },
];

export const images = {
  logo: LogoImage,
  errorAnime: errorImg,
  searchBanner: searchImg,
  contactBanner: contactImg,
};
