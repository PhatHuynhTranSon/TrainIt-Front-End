import React from "react";
import { getAllNotebookId, getNoteBooksWithIds } from "../../api/notebook";
import Loading from "../../components/loading";
import Padding from "../../components/spacing/padding";
import MediumHeading from "../../components/typography/mediumheading";
import NotebookCard from "./notebook/notebookcard";
import { MarginTopLarge } from "../../components/position";
import NoNotebookMessage from "./nonotebooks";

const AllNotebooks = () => {
    //Refs
    const notebookIds = React.useRef([]);
    const intervalId = React.useRef();
    const previousNotebooks = React.useRef([]);

    //States
    const [notebooks, setNotebooks] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    //On mount -> intialize
    React.useEffect(async () => {
        initialize();

        //Stop interval on unmount
        return () => {
            stopRetrievingNotebooks();
        }
    }, []);


    //Method to intiialize notebooks getting process
    const initialize = async () => {
        //Set loading to true
        setLoading(true);

        //Get all notebooks id
        const ids = await getAllNotebookId();

        //Set notebook ids
        notebookIds.current = ids;

        //Start interval to retrieve the notebooks
        startRetrievingNotebooks();
    }

    const startRetrievingNotebooks = async () => {
        getNotebooks();
        intervalId.current = setInterval(() => {
            getNotebooks();
        }, 50000);
    }

    const stopRetrievingNotebooks = () => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
    }

    const getNotebooks = async () => {
        //Get notebooks of all ids
        const notebooks = await getNoteBooksWithIds(notebookIds.current);

        //Merge with previous solutions
        const merged = mergeNotebooks(previousNotebooks.current, notebooks);
        previousNotebooks.current = merged;

        //Remove from ids all solutions whose state has been completed
        const onGoingNotebooks = merged.filter(notebook => !isTerminalState(notebook.status));
        if (onGoingNotebooks.length === 0) {
            //No more on going -> Stop retrieving
            stopRetrievingNotebooks();
        }

        //Else take only the on going notebooks and save their id
        const onGoingNotebookIds = onGoingNotebooks.map(notebook => notebook.id);
        notebookIds.current = onGoingNotebookIds;

        //Set notebooks
        setNotebooks(merged);

        //Set loading to false
        setLoading(false);
    }

    const isTerminalState = (state) => {
        return ["InService", "Stopped", "Failed"].includes(state);
    }

    const mergeNotebooks = (previousNotebooks, currentNotebooks) => {
        const currentNotebookIds = currentNotebooks.map(notebook => notebook.id);
        const previousExcludedNotebooks = previousNotebooks.filter(
            notebook => { 
                return !currentNotebookIds.includes(notebook.id);
            }
        );

        const merged =  [
            ...previousExcludedNotebooks, ...currentNotebooks
        ];

        //Sort based on IDs descending
        const sorted = merged.sort((a, b) => b.id - a.id);

        return sorted;
    }

    //Event handler
    const onCardActionPerformed = () => {
        initialize();
    }

    //Card
    return (
        <Padding padding="3rem">
            <MediumHeading>All notebooks</MediumHeading>

            <MarginTopLarge>
            {
                loading ? 
                <Loading label="Loading notebooks"/> : 
                <>
                {
                    notebooks.length > 0 ?
                    notebooks.map((notebook, index) => 
                        <NotebookCard 
                            notebook={notebook} 
                            key={index} 
                            onActionPerformed={onCardActionPerformed}/>)
                    : <NoNotebookMessage />

                }
                </>
            }
            </MarginTopLarge>

        </Padding>
    )
}

export default AllNotebooks;