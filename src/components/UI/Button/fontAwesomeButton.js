import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Fbutton.css";

const FButton = (props) => {
  return (
    <button>
      <FontAwesomeIcon icon={props.iconName}></FontAwesomeIcon>
    </button>
  );
};

export default FButton;
