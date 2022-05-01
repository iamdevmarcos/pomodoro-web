import React from "react";

import { Container } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({ icon }) => {
  return <Container icon={`${icon}`}></Container>;
};

export default MenuItem;
