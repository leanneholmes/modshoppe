import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JKx3JJEbgCYHufA03xf4ql8wbj4mGKYWHIR4EnMIPXwjb9ZuKMpibMNnH7jUflZmtdXeS8diGsUslUt5N5reml200kGLnI6JV';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Modshoppe'
      billingAddress
      shippingAddress
    //   image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;