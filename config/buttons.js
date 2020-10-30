// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import Server from "next/dist/next-server/server/next-server";

const navButtons = [
  {
    label: "Explore",
    path: "/explore",    
    icon: <FontAwesomeIcon icon={faCompass} />    
  },
  {
    label: "Near Me",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "My Cart",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;