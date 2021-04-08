import React  from "react";
import { InvertedButton } from "../../components/button";
import { MyTextField } from "../../components/input";
import { SectionHeading } from "../../components/typography";

const NotebookNameSection = ({ onNameSubmitted }) => {
    const [name, setName] = React.useState("");

    const onNameChanged = (event) => {
        setName(event.target.value);
    }

    const onButtonClicked = () => {
        onNameSubmitted(name);
    }

    return (
        <React.Fragment>
            <SectionHeading>Let's choose a name for your notebook</SectionHeading>
            <MyTextField 
                id="notebook-name" 
                label="Enter notebook name" 
                size="medium"
                onChange={onNameChanged}
                />
            <InvertedButton
                onClick={onButtonClicked}>
                Create
            </InvertedButton>
        </React.Fragment>
    )
}

export default NotebookNameSection;