import React from 'react';
import Background from './components/background';
import { Button } from './components/button';
import SlidingPanel from './components/slidingpanel';
import GlobalStyle from './components/styles/global';

import { Heading, SmallHeading, SubHeading } from "./components/typography";
import { CloseIcon } from "./components/icon";

import ProjectNameSection from "./pages/home/projectnamesection";
import ProjectDescSection from "./pages/home/projectdescriptionsection";
import ProjectTypeSection from "./pages/home/projecttypesection";
import ProjectDataSection from "./pages/home/projectdatasection";
import ProjectIsLoading from "./components/loading";

import { createProject as createMLProject } from "./api";

function App() {
  const [open, setOpen] = React.useState(false);

  //Project info
  const [projectName, setProjectName] = React.useState("");
  const [projectDesc, setProjectDesc] = React.useState("");
  const [projectType, setProjectType] = React.useState("");
  const [projectFile, setProjectFile] = React.useState("");

  const [isUploadingProject, setIsProjectUploading] = React.useState(false);
  const [isProjectUploaded, setIsProjectUploaded] = React.useState(false);

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
    setCurrentSection("type");
  }

  function onProjectTypeSubmitted(type) {
    setProjectType(type);
    setCurrentSection("file");
  }

  function onFileSubmitted(file) {
    setProjectFile(file);
    createProject();
  }

  function createProject() {
    const formData = createFormData();

    setIsProjectUploading(true);
    createMLProject(formData)
      .then(response => {
        console.log("Uploaded");
        setIsProjectUploaded(true);
        setIsProjectUploading(false);
      })
      .catch(error => {
        //TODO: Error handling
        console.log(error.response.data);
        setIsProjectUploading(false);
      });
  }

  function createFormData() {
    const formData = new FormData();

    formData.append("project_name", projectName);
    formData.append("project_description", projectDesc);
    formData.append("project_type", projectType);
    formData.append("project_data", projectFile);

    return formData;
  }

  function getCurrentSection() {
    switch(currentSection) {
      case "name":
        return <ProjectNameSection onProjectNameSubmitted={onProjectNameSubmitted}/>;
      case "desc":
        return <ProjectDescSection onProjectDescSubmitted={onProjectDescSubmitted}/>;
      case "type":
        return <ProjectTypeSection onProjectTypeSubmitted={onProjectTypeSubmitted}/>;
      case "file":
        return <ProjectDataSection onFileSubmitted={onFileSubmitted}/>
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

          { isUploadingProject ? <ProjectIsLoading /> : getCurrentSection() }
        </SlidingPanel>
      </Background>
    </React.Fragment>
  );
}

export default App;
