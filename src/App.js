import React, { Fragment } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import GeneralInfo from "./components/GeneralInfo";
import FeatureContainer from "./components/FeatureContainer";

const text =
  "description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description";

function App() {
  return (
    <Fragment>
      <Wrapper dark withGradient>
        <Main />
      </Wrapper>

      <Wrapper withContainer>
        <GeneralInfo />
      </Wrapper>

      <Wrapper dark withContainer>
        <FeatureContainer title={"Разработка AI решений"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper withContainer>
        <FeatureContainer title={"Разработка AI решений"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper dark withContainer>
        <FeatureContainer title={"Разработка AI решений"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper withContainer></Wrapper>
    </Fragment>
  );
}

export default App;
