import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Description from "@material-ui/icons/Description"
import { makeStyles } from "@material-ui/core";


const InputStyle = styled.input`
    display: none;
`;

const FileStyle = styled.div`
    padding: 2rem 5rem;
    border: 5px dashed #adb5bd;
    position: relative;
    margin-bottom: 20px;
`;

const FileLabel = styled.span`
    color: #adb5bd;
    font-size: 1.5rem;
    display: block;
`

const FileLabelGroup = styled.div`
    text-align: center;
`;

const useStyles = makeStyles({
    root: {
        color: "#adb5bd"
    }
});

function FileInput(props) {
    const classes = useStyles();

    function onFileChanged(event) {
        const file = event.target.files[0];
        props.onFileChanged(file);
    }

    return (
        <React.Fragment>
            <InputStyle 
                type="file" 
                id="data-file" 
                name="data-file"
                onChange={onFileChanged}/>
            <label htmlFor="data-file">
                <FileStyle>
                    <FileLabelGroup>
                        <Description fontSize="large" classes={{ root: classes.root }}/>
                        <FileLabel>
                            Upload csv file
                        </FileLabel>
                    </FileLabelGroup>
                </FileStyle>
            </label>
        </React.Fragment>
    )
}

FileInput.propTypes = {
    onFileChanged: PropTypes.func.isRequired
}

export default FileInput;