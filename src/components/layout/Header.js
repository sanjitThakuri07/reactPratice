import React from "react";

import Indicator from "./topComponent/Indicator";

import TabContainer from "./topComponent/TabContainer";

import MainNav from "./topComponent/MainNav";
const Header = (props) => {
  return (
    <React.Fragment>
      <Indicator></Indicator>
      <TabContainer tabName="New Tab"></TabContainer>
      <MainNav />
    </React.Fragment>
  );
};

export default Header;
