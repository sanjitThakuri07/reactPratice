import FButton from "../../UI/Button/fontAwesomeButton";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import fireFox from "../../../assests/img/firefox.png";

const NewTab = (props) => {
  // remove
  const removeNewTabHandler = (e) => {
    e.preventDefault();
    props.setNewTab(
      props.newTab.filter((del) => {
        return del.id !== props.tab.id;
      })
    );
  };

  return (
    <div className="active__tab utility__tab-Padding">
      <img src={fireFox} alt="" style={{ width: "1.6rem" }} />
      <p className="active-tab__name">{props.tabName}</p>
      <button onClick={removeNewTabHandler}>
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
};

export default NewTab;
