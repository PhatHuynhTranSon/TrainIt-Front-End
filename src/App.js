import React from 'react';
import Background from './components/background';
import Button from './components/button';
import SlidingPanel from './components/slidingpanel';
import GlobalStyle from './components/styles/global';
import { Heading, SubHeading } from "./components/typography";

import { CloseIcon } from "./components/icon";

function App() {
  const [open, setOpen] = React.useState(false);

  function openPanel() {
    setOpen(true);
  }

  function closePanel() {
    setOpen(false);
  }

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

        <Button onClick={() => openPanel()}>Create project</Button>

        <SlidingPanel
          open={open}
          onClose={() => closePanel()}>
          <div>
            <CloseIcon
              onClick={() => closePanel()}/>
            Create project
          </div>
        </SlidingPanel>
      </Background>
    </React.Fragment>
  );
}

export default App;
