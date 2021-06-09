import FButton from "../../UI/Button/fontAwesomeButton";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import NewTab from "./NewTab.js";
import "./newTab.css";

const TabContainer = (props) => {
  return (
    <div className="tab__container">
      <NewTab tabName={props.tabName} />
      <div className="tab utility__tab-Padding">
        <FButton iconName={faPlus} />
      </div>
    </div>
  );
};

export default TabContainer;
