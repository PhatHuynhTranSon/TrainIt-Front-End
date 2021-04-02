import { getDataPreview } from "./preview";
import { createProject, getProjectDetails, getProjectSolutions, getAllProjects } from "./project";
import { getSolutionsWithIds, createSolution } from "./solutions";
import { getDeployment, deploy, undeploy } from "./deployment";
import { predictOnline } from "./prediction";
import { signUp, logIn } from "./authentication";
import { processOrder, getTokens } from "./payment";


export {
    getDataPreview,
    createProject,
    getProjectDetails,
    getProjectSolutions,
    getSolutionsWithIds,
    getAllProjects,
    createSolution,
    getDeployment,
    deploy, 
    undeploy,
    predictOnline,
    signUp,
    logIn,
    processOrder,
    getTokens
}