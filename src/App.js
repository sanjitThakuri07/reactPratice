import React from "react";

import Header from "./components/layout/Header";

import MainBody from "./components/layout/MainBody";

import FooterOverlay from "./components/overlay/FooterOverlay";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBody />
      <FooterOverlay />
    </React.Fragment>
  );
}

export default App;
