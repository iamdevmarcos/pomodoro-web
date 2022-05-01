import React from "react";

import { Container } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({ icon, onClick }) => {
  return <Container icon={`${icon}`} onClick={onClick}></Container>;
};

export default MenuItem;
