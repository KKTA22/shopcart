import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function CartPage(props) {
  let tempq = props.quants;

  const [abc, setabc] = useState();

  const addn = (id, siz) => {
    tempq[[id, siz]] = tempq[[id, siz]] + 1;
    props.setquants(tempq);
    setabc(tempq[[id, siz]]);
    calctot();
  };

  const filtercart = (word, id, siz) => {
    if (word[0] === id && word[1] === siz) {
      return false;
    } else {
      return true;
    }
  };
  const subst = (id, siz) => {
    if (tempq[[id, siz]] === 1) {
      props.setcart(props.cart.filter((word) => filtercart(word, id, siz)));

      delete tempq[[id, siz]];

      props.setquants(tempq);

      setabc([id, 0]);
    } else {
      tempq[[id, siz]] = tempq[[id, siz]] - 1;
      props.setquants(tempq);
      setabc(tempq[[id, siz]]);
    }
    calctot();
  };

  console.log(props.quants);
  const calctot = () => {
    let tot = 0;
    console.log("run");
    props.cart.map(
      (item) =>
        (tot =
          tot +
          props.prdata.filter((word) => word.id === item[0])[0].price *
            props.quants[[item[0], item[1]]])
    );
    props.settp(tot);
  };
  calctot();

  return ReactDOM.createPortal(
    <div
      style={{
        overflowY: "scroll",
        display: "",
        backgroundColor: "rgba(206, 183, 183, 0.9)",
        zIndex: "100",
        position: "relative",
        padding: "10%",
        height: "100%",
      }}
    >
      <button
        onClick={() => {
          props.setcarton(false);
        }}
      >
        Back
      </button>

      {props.cart.length === 0 ? <h1>cart is empty</h1> : <></>}

      {props.cart.map((item) => (
        <div key={item}>
          <h2 style={{ borderStyle: "solid" }}>
            {props.prdata.filter((word) => word.id === item[0])[0].title}
          </h2>

          <h3>size:{item[1]}</h3>

          <h3>Quantity:{props.quants[[item[0], item[1]]]}</h3>
          <h3>Price:${props.prdata.filter((word) => word.id === item[0])[0].price}</h3>

          <button
            onClick={() => {
              addn(item[0], item[1]);
            }}
          >
            add
          </button>

          <button
            onClick={() => {
              subst(item[0], item[1]);
            }}
          >
            substract
          </button>
        </div>
      ))}
      <div>Total price=${Math.round(props.tp*100)/100}</div>

      <button
        style={{ padding: "1%", margin: "1%" }}
        onClick={() => {
          alert("Not allowed to check out");
        }}
      >
        Checkout
      </button>
    </div>,
    document.getElementById("portal")
  );
}
