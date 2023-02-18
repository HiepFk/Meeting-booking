import { FaHome, FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export const menu_user = [
  { id: 1, title: "Home", link: "/", icon: <FaHome /> },
];
export const menu_admin = [
  { id: 1, title: "Home", link: "/", icon: <FaHome /> },
  { id: 2, title: "Rooms & Groups", link: "/rgs", icon: <HiUserGroup /> },
  { id: 3, title: "Users", link: "/users", icon: <FaUser /> },
];
