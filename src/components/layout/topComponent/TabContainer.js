import React, { useState } from "react";

import NewTab from "./NewTab.js";
import "./newTab.css";

const TabContainer = (props) => {
  const [newTab, setNewTab] = useState([]);

  const newTabHandler = (e) => {
    e.preventDefault();
    setNewTab((prevTabDetails) => {
      return [
        ...prevTabDetails,
        { id: Math.random() * 100, tabName: "New Tab", key: Math.random() * 2 },
      ];
    });
  };

  console.log(newTab);

  return (
    <div className="tab__container">
      {newTab.map((tab) => {
        return (
          <NewTab
            tabName={tab.tabName}
            key={tab.key}
            tab={tab}
            setNewTab={setNewTab}
            newTab={newTab}
          />
        );
      })}
      {/* <NewTab tabName={props.tabName} /> */}
      <div className="tab utility__tab-Padding">
        <button onClick={newTabHandler}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default TabContainer;
