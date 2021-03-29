import { withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#7209b7",
      color: "white",
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);


export default StyledTableCell;