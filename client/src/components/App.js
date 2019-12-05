import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import HeaderContainer from "../containers/HeaderContainer";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Main />
    </div>
  );
}

export default App;
