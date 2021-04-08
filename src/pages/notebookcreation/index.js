import React from 'react';
import Background from '../../components/background';
import { Button } from '../../components/button';
import SlidingPanel from '../../components/slidingpanel';

import { Heading, SmallHeading, SubHeading } from "../../components/typography";
import { CloseIcon } from "../../components/icon";
import NotebookNameSection from './notebooknamesection';
import Loading from '../../components/loading';
import { Redirect } from 'react-router';
import { createNotebook } from '../../api/notebook';

const NotebookCreation = () => {
    const [open, setOpen] = React.useState(false);
    const [notebookCreated, setNotebookCreated] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const openPanel = () => {
        setOpen(true);
      }

    const closePanel = () => {
        setOpen(false);
    }

    const onNameSubmitted = async (name) => {
        //Set loading to true
        setLoading(true);

        //Create notebook
        await createNotebook(name);

        //Set loading to false
        setLoading(false);

        //Redirect to new notebooks page
        setNotebookCreated(true);
    }

    return (
        <>
        {
            notebookCreated ?
            <Redirect to="/hub/notebooks"/> :
            <Background>
                <Heading>
                    Create a Jupyter notebook
                </Heading>

                <SubHeading>
                    Create a jupyter notebook for notebook for data wrangling or model training
                </SubHeading>

                <Button onClick={() => openPanel()}>Create notebook</Button>

                <SlidingPanel
                    open={open}
                    onClose={() => closePanel()}>

                    <div style={{ position: "relative" }}>
                    <CloseIcon
                        onClick={() => closePanel()}/>
                    <SmallHeading>
                        Create a notebook
                    </SmallHeading>
                    </div>

                    {
                        loading ? 
                        <Loading label="Creating notebooks"/> :
                        <NotebookNameSection onNameSubmitted={onNameSubmitted}/>
                    }
                </SlidingPanel>
            </Background>
        }
        </>
    )
}

export default NotebookCreation;