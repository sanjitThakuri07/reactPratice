import FButton from "../../UI/Button/fontAwesomeButton";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import fireFox from "../../../assests/img/firefox.png";

const NewTab = (props) => {
  return (
    <div className="active__tab utility__tab-Padding">
      <img src={fireFox} alt="" style={{ width: "1.6rem" }} />
      <p className="active-tab__name">{props.tabName}</p>
      <FButton iconName={faTimes} />
    </div>
  );
};

export default NewTab;
