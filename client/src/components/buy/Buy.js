import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Option from "./Option";
import Right from "./Right";
import Total from "./Total";
import "./buy.css";

const Buy = () => {
  const [cartdata, setCartdata] = useState("");
  console.log(cartdata.length);

  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.status !== 201) {
      console.log("error in uynow");
    } else {
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price (KD)</span>
              <Divider />
              {cartdata.map((e, k) => {
                return (
                  <>
                    <div className="item_container">
                      <img src={e.url} alt="" />
                      <div className="item_details">
                        <h4>{e.title}</h4>

                        <h5 className="differentprice">{e.price.new}</h5>
                        <p className="unusual">Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <p>Fulfilled by: Xcite</p>
                        <Option deletedata={e.id} get={getdatabuy} />
                      </div>
                    
                      <h5 className="item_price">{parseFloat(e.price.cost)}</h5>
                    </div>
                    <Divider />
                  </>
                );
              })
              }
              <Total item={cartdata} />
            </div>
            <Right item={cartdata} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Buy;
