import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import StyledTableCell from "../../../components/table";
import Section from "../section";

import { getProjectDetails } from "../../../api";
import { TextField } from "@material-ui/core";
import { InvertedButton } from "../../../components/button";
import { Width50 } from "../../../components/position";
import PredictionBox from "./predictionbox";

import { predictOnline } from "../../../api";


function ValueTable({ columns, values, onValueChanged }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" width="50%">Column</StyledTableCell>
                        <StyledTableCell align="center" width="50%">Input</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    columns.map((column, index) => {
                        return (
                            <TableRow key={index}>
                                <StyledTableCell align="center" width="50%">{ column }</StyledTableCell>
                                <StyledTableCell align="center" width="50%">
                                    <TextField
                                        value={values[index]}
                                        onChange={(event) => onValueChanged(index, event)}
                                        type="number"/>
                                </StyledTableCell>
                            </TableRow>
                        );
                    })
                } 
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Prediction({ deployment }) {
    //Internal State
    const [columns, setColumns] = React.useState([]);
    const [values, setValues] = React.useState([]);
    const [prediction, setPrediction] = React.useState(null);

    React.useEffect(() => {
        getColumns();
    }, []);

    //Get data column
    function getColumns() {
        getProjectDetails(deployment.project_id)
            .then(response => {
                setColumns(extractColumns(response));
                setColumnValues(response);
            })
            .catch(error => {
                //TODO: Error handling
            });
    }

    function extractColumns(response) {
        const { data } = response;
        const columns = data.data.headers;
        return columns.slice(0, columns.length - 1);
    }

    function setColumnValues(response) {
        const { data } = response;
        const dataColumns = data.data.headers;
        const dataValues = new Array(dataColumns.length - 1);

        for (let i = 0; i != dataValues.length; ++i) {
            dataValues[i] = 0;
        }

        setValues(dataValues);
    }

    function onValueChanged(index, event) {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    }

    function onPredictionClicked() {
        const parsedValues = parseValues(values);
        predictOnline(deployment.project_id, parsedValues)
            .then(response => {
                const { data } = response;
                const { result } = data;
                setPrediction(result.toString());
            })
            .catch(error => {
                //TODO: Error Handling
                const { data } = error.response;
            });
    }

    function parseValues(vals) {
        return vals.map(item => {
            if ((typeof item) === 'string') {
                if (item.length === 0) {
                    return 0;
                } else {
                    return parseFloat(item);
                }
            } else {
                return item;
            }
        })
    }

    return (
        <Section title="Online prediction">
            <Width50>
                {
                    columns ? 
                    <React.Fragment>
                        <ValueTable 
                            columns={columns}
                            values={values}
                            onValueChanged={onValueChanged}/>
                        <InvertedButton 
                            width="100%"
                            onClick={onPredictionClicked}>
                            Make prediction
                        </InvertedButton>
                        <PredictionBox prediction={prediction}/>
                    </React.Fragment> :
                    null
                }
            </Width50>
        </Section>
    );
}

export default Prediction;