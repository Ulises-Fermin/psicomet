import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router";
import PopUp from "reactjs-popup";

export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cita individual",
                amount: {
                  currency_code: "USD",
                  value: 35.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          history.push("/Home")
          window.alert('Pago exitoso. Su cita ha sido reservada.')

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}