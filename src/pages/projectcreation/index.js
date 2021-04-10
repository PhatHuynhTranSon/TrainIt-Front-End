import React from 'react';
import {
  Redirect
} from "react-router-dom";

import Background from '../../components/background';
import { Button } from '../../components/button';
import SlidingPanel from '../../components/slidingpanel';

import { Heading, SmallHeading, SubHeading } from "../../components/typography";
import { CloseIcon } from "../../components/icon";

import ProjectNameSection from "./projectnamesection";
import ProjectDescSection from "./projectdescriptionsection";
import ProjectTypeSection from "./projecttypesection";
import ProjectDataSection from "./projectdatasection";
import Loading from "../../components/loading";

import { createProject as createMLProject } from "../../api";

function ProjectCreation() {
  const [open, setOpen] = React.useState(false);

  //Project info
  const [projectName, setProjectName] = React.useState("");
  const [projectDesc, setProjectDesc] = React.useState("");
  const [projectType, setProjectType] = React.useState("");
  const [projectFile, setProjectFile] = React.useState("");

  //Project after creation
  const projectFileRef = React.useRef();
  const projectRef = React.useRef();

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
    projectFileRef.current = file;
    createProject();
  }

  function createProject() {
    const formData = createFormData();

    setIsProjectUploading(true);
    createMLProject(formData)
      .then(response => {
        //Set project 
        projectRef.current = response.data;
        setIsProjectUploaded(true);
        setIsProjectUploading(false);
      })
      .catch(error => {
        //TODO: Error handling
        setIsProjectUploading(false);
      });
  }

  function createFormData() {
    const formData = new FormData();

    formData.append("project_name", projectName);
    formData.append("project_description", projectDesc);
    formData.append("project_type", projectType);
    formData.append("project_data", projectFileRef.current);

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
    <Background>
      <Heading>
        Welcome to Trainee
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

        { 
          isProjectUploaded ?
          <Redirect to={`/hub/projects/${projectRef.current.project.id}`}/> : 
          (isUploadingProject ? <Loading label="Creating project"/> : getCurrentSection()) 
        }
      </SlidingPanel>
    </Background>
  );
}

export default ProjectCreation;