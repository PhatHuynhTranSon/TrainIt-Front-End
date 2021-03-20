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

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#7209b7",
      color: "white",
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    tableWrapper: {
        margin: "20px 0"
    }
});


function ParameterTable(props) {
    const { parameters } = props;
    const classes = useStyles();


    return (
        <TableContainer component={Paper} classes={{ root: classes.tableWrapper }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Parameters</StyledTableCell>
                        <StyledTableCell>Values</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    
                    Object.keys(parameters).map((parameter, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{ parameter }</TableCell>
                                <TableCell>{ parameters[parameter] }</TableCell>
                            </TableRow>
                        );
                    })
                    
                } 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

ParameterTable.propTypes = {
    parameters: PropTypes.object.isRequired
}

export default ParameterTable;