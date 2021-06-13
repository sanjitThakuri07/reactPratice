import TabFunctionality1 from "./MainNavFunctionality/TabFunctionality1";

import TabShow from "./MainNavFunctionality/TabShow";

import "./MainNav.css";

const MainNav = (props) => {
  return (
    <div class="tab__functionality">
      <TabFunctionality1 />
      <form action="">
        <i class="fas fa-search"></i>
        <input type="text" />
      </form>
      <TabShow />
    </div>
  );
};

export default MainNav;
