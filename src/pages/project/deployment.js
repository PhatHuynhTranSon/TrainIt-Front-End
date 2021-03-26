import React from "react";
import PropTypes from "prop-types";
import Section from "./section";

import { getDeployment, deploy, undeploy } from "../../api";
import MediumHeading from "../../components/typography/mediumheading";
import Loading from "../../components/loading";
import ColorStyle from "../../components/typography/color";
import SmallDescription from "../../components/typography/smalldescription";
import { InvertedButton } from "../../components/button";

function inTransitionState(deployment) {
    return !(["OutOfService", "InService", "Failed"].includes(deployment.deployment.status));
}

function inService(deployment) {
    return deployment.deployment.status == "InService"
}

function DeployedModel({ deployment, onUndeployModel }) {
    return (
        <React.Fragment>
            {
                inTransitionState(deployment) ?
                <Loading label={deployment.deployment.status}/> : 
                <React.Fragment>
                {
                    inService(deployment) ? 
                    <React.Fragment>
                        <MediumHeading gray>Model is: <ColorStyle>Deployed</ColorStyle></MediumHeading>
                        <SmallDescription medium>Your model is deploy and you can run inference job. You can also choose to undeploy the model</SmallDescription>
                        <InvertedButton onClick={onUndeployModel}>Undeploy</InvertedButton>
                    </React.Fragment>
                    : <MediumHeading gray>Model is: <ColorStyle warning>OutOfService</ColorStyle></MediumHeading>
                }
                </React.Fragment>
                
            }
        </React.Fragment>
    )
}

function UndeployedModel({ onDeployChosen }) {
    return (
        <React.Fragment>
            <MediumHeading gray>Model is: <ColorStyle warning>Undeployed</ColorStyle></MediumHeading>
            <SmallDescription medium>
                You can choose to deploy the best performing model by select the deploy button below.
            </SmallDescription>
            <InvertedButton onClick={onDeployChosen}>Deploy</InvertedButton>
        </React.Fragment>
    )
}

function Deployment({ project }) {
    //Inner state
    const [deployment, setDeployment] = React.useState(null);

    //Refs
    const intervalId = React.useRef(null);

    //Call deployment endpoint
    React.useEffect(() => {
        startDeploymentInterval();
    }, []);

    //Method to deploy and undeploy model
    function startDeploymentInterval() {
        intervalId.current = setInterval(() => {
            updateDeployment();
        }, 50000);
    }

    function stopDeploymentInterval() {
        clearInterval(intervalId.current);
    }

    function updateDeployment() {
        getDeployment(project.id)
            .then(response => {
                //Update deployment
                const { data } = response;
                setDeployment(data);

                //Check state -> Stop interval
                const status = data.deployment.status;
                if (!inTransitionState(status)) {
                    if (intervalId.current) {
                        stopDeploymentInterval();
                        intervalId.current = null;
                    }
                }
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    function deployModel() {
        deploy(project.id)
            .then(response => {
                //Successfully deploy model
                updateDeployment();
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    function undeployModel() {
        undeploy(project.id)
            .then(response => {
                //Successfully deploy model
                updateDeployment();
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    return (
        <React.Fragment>
            <Section title="Deployment status">
                {
                    deployment ? 
                    <React.Fragment>
                    {
                        deployment.deployed ? 
                        <DeployedModel 
                            deployment={deployment}
                            onUndeployModel={undeployModel}/> : 
                        <UndeployedModel onDeployChosen={deployModel}/>
                    }
                    </React.Fragment> :
                    <Loading label="Loading deployments"/>
                }
            </Section>
        </React.Fragment>
    )
}

Deployment.propTypes = {
    project: PropTypes.object.isRequired
}

export default Deployment;