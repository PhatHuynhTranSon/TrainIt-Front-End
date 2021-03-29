import { getDataPreview } from "./preview";
import { createProject, getProjectDetails, getProjectSolutions } from "./project";
import { getSolutionsWithIds, createSolution } from "./solutions";
import { getDeployment, deploy, undeploy } from "./deployment";
import { predictOnline } from "./prediction";
import { signUp, logIn } from "./authentication";


export {
    getDataPreview,
    createProject,
    getProjectDetails,
    getProjectSolutions,
    getSolutionsWithIds,
    createSolution,
    getDeployment,
    deploy, 
    undeploy,
    predictOnline,
    signUp,
    logIn
}