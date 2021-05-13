import React from "react";
import styled from "styled-components";

import { MdCloudQueue, MdNoteAdd, MdFileUpload } from "react-icons/md"

const PanelGrid = styled.section`
    height: 35rem;
    padding: 2rem;
    display: grid;
    grid-template: 20% 80% / repeat(3, 1fr);
`;

const PanelTitle = styled.h1`
    margin: 20px auto;
    text-align: center;
    font-weight: normal;
    font-size: 2rem;
    text-transform: uppercase;
    width: 40%;
    color: #7209B7;
    grid-area: 1 / 1 / span 1 / span 3;
`;

const PanelCards = styled.div`
    grid-area: 2 / 1 / span 1 / span 3;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`;

const PanelCard = styled.div`
    text-align: center;
    padding: 30px;
`;

const PanelCardTitle = styled.h3`
    margin-bottom: 20px;
    color: #c4c4c4;
`;

const PanelCardText = styled.p`
    width: 60%;
    margin: 0 auto;
`;

const FeaturePanel = () => {
    return (
        <PanelGrid>
            <PanelTitle>What you can do with Trainee</PanelTitle>
            <PanelCards>    
                <PanelCard>
                    <MdNoteAdd fontSize="12rem" color="#c4c4c4"/>
                    <PanelCardTitle>Notebooks</PanelCardTitle>
                    <PanelCardText>On-demand cloud-powered Jupyter notebook</PanelCardText>
                </PanelCard>

                <PanelCard>
                    <MdCloudQueue fontSize="12rem" color="#c4c4c4"/>
                    <PanelCardTitle>Cloud ML</PanelCardTitle>
                    <PanelCardText>Training your Machine Learning model on the cloud</PanelCardText>
                </PanelCard>

                <PanelCard>
                    <MdFileUpload fontSize="12rem" color="#c4c4c4"/>
                    <PanelCardTitle>Deployment</PanelCardTitle>
                    <PanelCardText>On-click deployment. Train once - Use anywhere</PanelCardText>
                </PanelCard>
            </PanelCards>
        </PanelGrid>
    )
};

export default FeaturePanel;