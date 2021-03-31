import PropTypes from "prop-types";
import React from "react";

import Section from "./section";
import DataTable from "../../components/table/datatable";

function Summary(props) {
    return (
        <React.Fragment>
            <Section title="Description">
                <p>{ props.project.description }</p>
            </Section>

            <Section title="Data">
                <DataTable 
                    headers={props.data.headers}
                    first_five={props.data.first_5}
                    last_five={props.data.last_5}/>
            </Section>
        </React.Fragment>
    )
}

Summary.propTypes = {
    project: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default Summary;

