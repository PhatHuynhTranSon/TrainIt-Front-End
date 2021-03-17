import styled from "styled-components";
import PropTypes from "prop-types";
import { ClassificationChip, RegressionChip } from "../../components/chip";


const ProjectNameStyle = styled.div`
    padding: 3rem;
    background-color: #7209b7;
    color: white;
`

const ProjectNameTitleStyle = styled.h1`
    font-size: 3rem;
`

function ProjectName(props) {
    return (
        <ProjectNameStyle>
            <ProjectNameTitleStyle>{ props.projectName }</ProjectNameTitleStyle>
            {
                props.projectType === "classification" ? <ClassificationChip/> : <RegressionChip/>
            }
        </ProjectNameStyle>
    )
}

ProjectName.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired
}

export default ProjectName;