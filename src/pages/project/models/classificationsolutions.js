import { Grid } from "@material-ui/core";
import React from "react";
import { MyTabPanel, MyVerticalTabs } from "../../../components/tab";

import MediumHeading from "../../../components/typography/mediumheading"

function ClassificationSolutionCreation(props) {
    //Value of tabs
    const [value, setValue] = React.useState(0);

    function switchTab(event, newValue) {
        setValue(newValue);
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={2}>
                    <MyVerticalTabs 
                        headers={["Logistic Regression", "Naives Bayes", "Random Forest"]}
                        value={value}
                        handleChange={switchTab}/>
                </Grid>

                <Grid item xs={10}>
                    <MyTabPanel value={value} index={0}>
                        <MediumHeading>Logistic Regression</MediumHeading>
                    </MyTabPanel>

                    <MyTabPanel value={value} index={1}>
                        <MediumHeading>Naives Bayes</MediumHeading>
                    </MyTabPanel>

                    <MyTabPanel value={value} index={2}>
                        <MediumHeading>Random forest</MediumHeading>
                    </MyTabPanel>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

ClassificationSolutionCreation.propTypes = {

}

export default ClassificationSolutionCreation;