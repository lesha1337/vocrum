import React, { Fragment } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  return (
    <Fragment>
      <Main />
      <GeneralInfo />
      <Wrapper>hello</Wrapper>
      <Wrapper>hello</Wrapper>
    </Fragment>
  );
}

export default App;
