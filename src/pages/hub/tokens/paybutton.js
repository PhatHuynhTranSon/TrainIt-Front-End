import PropTypes from "prop-types";
import React from "react";
import { processOrder } from "../../../api/payment";

function PayButton(props) {
    const { amount, reference_id, onSuccess, onError } = props;

    //Ref 
    const buttonRef = React.useRef();

    React.useEffect(() => {
        //Clear 
        buttonRef.current.innerHTML = "";

        //Attach button
        window
            .paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                reference_id: reference_id,
                                amount: {
                                    value: amount
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    //TODO: Make request to endpoint
                    processOrder(data.orderID)
                        .then(response => {
                            onSuccess(data);
                        })
                        .catch(error => {
                            //TODO: Error handing
                            props.onError(error);
                        });
                },
                onError: (err) => {
                    //TODO: Error handling
                    props.onError(err);
                },
            })
            .render(buttonRef.current);
    }, [])

    return (
        <div ref={buttonRef}>

        </div>
    )
}

PayButton.propTypes = {
    amount: PropTypes.string.isRequired,
    reference_id: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
}

export default PayButton;