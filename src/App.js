import React from 'react';
import Background from './components/background';
import { Button } from './components/button';
import SlidingPanel from './components/slidingpanel';
import GlobalStyle from './components/styles/global';

import { Heading, SmallHeading, SubHeading } from "./components/typography";
import { CloseIcon } from "./components/icon";

import ProjectNameSection from "./pages/home/projectnamesection";
import ProjectDescSection from './pages/home/projectdescriptionsection';

function App() {
  const [open, setOpen] = React.useState(false);

  //Project info
  const [projectName, setProjectName] = React.useState("");
  const [projectDesc, setProjectDesc] = React.useState("");

  //Current flow
  const [currentSection, setCurrentSection] = React.useState("");

  function openPanel() {
    setOpen(true);
  }

  function closePanel() {
    setCurrentSection("name");
    setOpen(false);
  }

  //Project section input handlers
  function onProjectNameSubmitted(name) {
    setProjectName(name);
    setCurrentSection("desc");
  }

  function onProjectDescSubmitted(desc) {
    setProjectDesc(desc);
  }

  function getCurrentSection() {
    switch(currentSection) {
      case "name":
        return <ProjectNameSection onProjectNameSubmitted={onProjectNameSubmitted}/>;
      case "desc":
        return <ProjectDescSection onProjectDescSubmitted={onProjectDescSubmitted}/>;
      default:
        return <ProjectNameSection onProjectNameSubmitted={onProjectNameSubmitted}/>;
    }
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

          <div style={{ position: "relative" }}>
            <CloseIcon
              onClick={() => closePanel()}/>
            <SmallHeading>
              Create a project
            </SmallHeading>
          </div>

          { getCurrentSection() }
        </SlidingPanel>
      </Background>
    </React.Fragment>
  );
}

export default App;
