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
        minHeight: "20rem",
        margin: "20px 0"
    }
});


function MyTable(props) {
    const classes = useStyles();

    function mapObjectToTableRow(object) {
        return (
            <React.Fragment>
            {
                Object.keys(object).map(key => {
                    return <StyledTableCell>{ object[key] }</StyledTableCell>
                })
            }
            </React.Fragment>
        )
    }

    function createPlaceholderRow(headers) {
        return (
            <TableRow>
            {
                headers.map((_, index) => {
                    return (
                        <TableCell key={index}>...</TableCell>
                    )
                })
            }
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper} classes={{ root: classes.tableWrapper }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {
                        props.headers.map((header, index) => {
                            return (
                                <StyledTableCell key={index}>{ header }</StyledTableCell>
                            )
                        })
                    }
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    props.first_five.map((row, index) => {
                        return (
                            <TableRow key={index}>
                            {
                                mapObjectToTableRow(row)
                            }
                            </TableRow>
                        )
                    })
                }

                {
                    createPlaceholderRow(props.headers)
                }

                {
                    props.last_five.map((row, index) => {
                        return (
                            <TableRow key={index}>
                            {
                                mapObjectToTableRow(row)
                            }
                            </TableRow>
                        )
                    })
                }   
                </TableBody>
            </Table>
        </TableContainer>
    )
}

MyTable.propTypes = {
    headers: PropTypes.array.isRequired,
    first_five: PropTypes.array.isRequired,
    last_five: PropTypes.array.isRequired
}

export default MyTable;