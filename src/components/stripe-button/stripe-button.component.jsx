import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishableKey = 'pk_test_51Izr16FfQSq3ka8XBQC86z0SsgZcT1plmhHUbNr62ecd2a3HqC3VP7F0RdNxinG6pCaARiOqDfffSpikXO2TIAqM008rRD9diP';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'JustClothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={pulishableKey}
        />
    );
};

export default StripeCheckoutButton;
