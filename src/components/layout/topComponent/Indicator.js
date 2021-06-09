import React from "react";

import {
  faTimes,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

import FButton from "../../UI/Button/fontAwesomeButton";

import "./indicator.css";

const Indicator = (props) => {
  return (
    <div className="container">
      <div className="icons">
        {/* <button>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>
        <button>
          <FontAwesomeIcon icon={faWindowRestore} />
        </button> */}
        <FButton iconName={faTimes} />
        <FButton iconName={faWindowMinimize} />
        <FButton iconName={faWindowRestore} />
      </div>
      <h3 className="text">Mozilla Firefox</h3>
    </div>
  );
};

export default Indicator;
