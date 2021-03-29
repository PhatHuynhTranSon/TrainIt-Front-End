import { withStyles, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import PropTypes from "prop-types";
import React from "react";

import StyledTableCell from "./index";

const useStyles = makeStyles({
    tableWrapper: {
        margin: "20px 0"
    }
});


function MetricsTable(props) {
    const { metrics } = props;
    const classes = useStyles();


    return (
        <TableContainer component={Paper} classes={{ root: classes.tableWrapper }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Metrics</StyledTableCell>
                        <StyledTableCell>Values</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    
                    Object.keys(metrics).map((metric, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{ metric }</TableCell>
                                <TableCell>{ metrics[metric] }</TableCell>
                            </TableRow>
                        );
                    })
                    
                } 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

MetricsTable.propTypes = {
    metrics: PropTypes.object.isRequired
}

export default MetricsTable;