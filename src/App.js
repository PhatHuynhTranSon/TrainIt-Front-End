import React from 'react';
import Background from './components/background';
import Button from './components/button';
import GlobalStyle from './components/styles/global';
import { Heading, SubHeading } from "./components/typography";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Background>
        <Heading>
          Welcome to TrainIT
        </Heading>
        <SubHeading>
          Tools for training, monitoring and deploying Machine Learning models
        </SubHeading>
        <Button>Create project</Button>
      </Background>
    </React.Fragment>
  );
}

export default App;
