import { CardElement } from "@stripe/react-stripe-js";
import { ButtonTypeClasses } from "../button/button.component";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import {
  PaymentFormContainerStyle,
  FormContainerStyle,
  PaymentButton,
} from "./PaymentForm.style";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartTotalSelector } from "../../store/cart/cart.selector";
import { useState } from "react";


const PaymentForm = () => {
  const stripe = useStripe();
  const Elements = useElements();
  const amount = useSelector(CartTotalSelector);
  const currentUser = useSelector(selectCurrentUser);
  const  [IsProcessingPaymnet,SetIsProcessingPaymnet]= useState(false)

  const Paymenthandler = async (e) => {
    e.preventDefault();

    if (!stripe || !Elements) return;
    SetIsProcessingPaymnet(true)
    const response = await fetch(
      "https://stripe-server2.herokuapp.com/create-checkout-session",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));

    const clientSecret = response.session.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: Elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Yihua Zhang",
        },
      },
    });

    SetIsProcessingPaymnet(false)
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <PaymentFormContainerStyle>
      <FormContainerStyle onSubmit={Paymenthandler}>
        <h2> Credit Card Payment :</h2>
        <CardElement />
        <PaymentButton IsLoading={IsProcessingPaymnet} buttonType={ButtonTypeClasses.inverted}> Pay Now</PaymentButton>
      </FormContainerStyle>
    </PaymentFormContainerStyle>
  );
};

export default PaymentForm;
