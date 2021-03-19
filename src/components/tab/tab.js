import React from "react";
import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


function MyTabs(props) {
    return (
        <Tabs value={props.value} onChange={props.handleChange} aria-label="simple tabs example">
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

Tabs.propTypes = {
    headers: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default MyTabs;

