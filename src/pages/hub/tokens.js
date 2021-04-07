import React from "react";
import Padding from "../../components/spacing/padding";
import MediumHeading from "../../components/typography/mediumheading";
import Description from "../../components/typography/description"
import { MarginTopLarge, MarginTopSmall } from "../../components/position/index";
import { Grid } from "@material-ui/core";
import TokenPack from "./tokens/tokenpack";

import SmallTokenPack from "../../media/small_pack.png";
import MediumTokenPack from "../../media/medium_pack.png";
import LargeTokenPack from "../../media/large_pack.png";
import { Alert } from "@material-ui/lab";
import { getTokens } from "../../api/payment";

import Loading from "../../components/loading";

function Tokens() {
    const [tokens, setTokens] = React.useState(0);
    const [successMessage, setSuccessMessage] = React.useState();
    const [errorMessage, setErrorMessage] = React.useState();
    const [tokenErrorMessage, setTokenErrorMessage] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        retrieveTokens();
    }, []);

    function retrieveTokens() {
        setLoading(true);

        getTokens()
            .then(response => {
                const { data } = response;
                const { tokens } = data;
                setTokens(tokens);
            })
            .catch(error => {
                //TODO: Error handling
                setTokenErrorMessage("Can not retrieve tokens");
            })
            .finally(() => setLoading(false)); 
    }

    function onPurchaseSuccessful() {
        setSuccessMessage("Successfully purchased more tokens");
        retrieveTokens();
    }

    function onPurchaseError(error) {
        setErrorMessage("An error has occured purchasing tokens. Please try again.");
    }

    return (
        <Padding padding="3rem">
            {
                successMessage ?
                <Alert severity="success">{ successMessage }</Alert> : null
            }
            {
                errorMessage ? 
                <Alert severity="error">{ errorMessage }</Alert> : null
            }
            {
                tokenErrorMessage ? 
                <Alert severity="error">{ tokenErrorMessage }</Alert> : null
            }
            {
                loading ? 
                <Loading label="Retrieving coin information" /> :
                (
                    tokenErrorMessage ? 
                    null : 
                    <React.Fragment>
                        <MediumHeading>You currently have { tokens } tokens</MediumHeading>
                        <MarginTopSmall>
                            <Description>
                                You can currently create and train { tokens } models, or deploy { tokens } trained models.
                            </Description>
                        </MarginTopSmall>

                        <MarginTopLarge>
                            <MediumHeading>Purchase more tokens</MediumHeading>
                            <MarginTopSmall>
                                <Description>You can purchase below token packs to get more tokens</Description>
                            </MarginTopSmall>
                        </MarginTopLarge>

                        <MarginTopLarge>
                            <Grid container spacing={10}>
                                <Grid item xs={4}>
                                    <TokenPack 
                                        source={SmallTokenPack}
                                        title="Small pack"
                                        id="1"
                                        amount="0.99"
                                        onSuccess={onPurchaseSuccessful}
                                        onError={onPurchaseError}/>
                                </Grid>

                                <Grid item xs={4}>
                                    <TokenPack 
                                        source={MediumTokenPack}
                                        title="Small pack"
                                        id="2"
                                        amount="2.99"
                                        onSuccess={onPurchaseSuccessful}
                                        onError={onPurchaseError}/>
                                </Grid>

                                <Grid item xs={4}>
                                    <TokenPack
                                        source={LargeTokenPack}
                                        title="Large pack"
                                        id="3"
                                        amount="5.99"
                                        onSuccess={onPurchaseSuccessful}
                                        onError={onPurchaseError}/>
                                </Grid>
                            </Grid>
                        </MarginTopLarge>
                    </React.Fragment>
                )
            }
        </Padding>
    )
}

export default Tokens;