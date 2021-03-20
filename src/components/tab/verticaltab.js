import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function MyVerticalTab(props) {
    return (
        <Tabs 
            value={props.value} 
            orientation="vertical"
            onChange={props.handleChange} 
            aria-label="simple tabs example">
        {
            props.headers.map((header, index) => {
                return (
                    <Tab key={index} label={header}/>
                )
            })
        }
        </Tabs>
    )
}

MyVerticalTab.propTypes = {
    headers: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default MyVerticalTab;