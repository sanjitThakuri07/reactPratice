import React from "react";

import Indicator from "./topComponent/Indicator";

import TabContainer from "./topComponent/TabContainer";

const Header = (props) => {
  return (
    <React.Fragment>
      <Indicator></Indicator>
      <TabContainer tabName="New Tab"></TabContainer>
    </React.Fragment>
  );
};

export default Header;
