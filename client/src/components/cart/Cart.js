import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {LoginContext} from "../context/ContextProvider";
import "./cart.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarRateIcon from "@mui/icons-material/StarRate";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import { Divider } from "@mui/material";

const Cart = () => {

  //GETTING DATE
  var someDate = new Date();
  someDate.setDate(someDate.getDate() + 10);
  var dd = someDate.getDate();
  var mm = someDate.getMonth() + 1;
  var y = someDate.getFullYear();
  var date1 = dd + "/" + mm + "/" + y;


  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);


  const { id } = useParams("");
  const history = useHistory();
  const [inddata, setInddata] = useState("");
  // console.log(inddata)




  //GETTING INDIVIDUAL DATA
  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    //  console.log(data);

    if (res.status !== 201) {
      alert("no data available");
    } else {
      setInddata(data);
    }
  };
  useEffect(() => {
    setTimeout(getinddata, 1000);
  }, [id]);




  //ADDING DATA TO CART
  const addtocart = async (id) => {
    console.log(id);
    const check = await fetch(`/addcart/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inddata
        }),
        credentials: "include"
    });
    const data1 = await check.json();
    console.log(data1);

    if (check.status === 401 || !data1) {
        console.log("invalid user")
        alert("invalid user")
    } else {
        alert("data added in your cart")
        setAccount(data1)
        history.push("/buynow");
    }
}



  return (
    <div className="cart_section">
      {/* show stuff after data avaialble and page is loaded */}
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.detailUrl} alt="cart" />
            <div className="cart_btn">
              {account?<button className="cart_btn1" onClick={() => addtocart(inddata.id)}>
                <ShoppingCartOutlinedIcon /> Add to Cart
              </button>:<button className="cart_btn1" onClick={() => toast.warn("You must be logged in to buy.")}>
                <ShoppingCartOutlinedIcon /> Add to Cart
              </button> }
              <ToastContainer />
              <button className="cart_btn2">
                <SpeedOutlinedIcon /> 1-Click-Buy
              </button>
            </div>
          </div>
          <div className="right_cart">
            {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
            <h3>{inddata.title}</h3>
            <div>
              <StarRateIcon style={{ fill: "#fec525" }} />
              <StarRateIcon style={{ fill: "#fec525" }} />
              <StarRateIcon style={{ fill: "#fec525" }} />
              <StarRateIcon style={{ fill: "#fec525" }} />
              <StarHalfIcon style={{ fill: "#fec525" }} />
              &nbsp;<span className="rating">&nbsp;4.6&nbsp;</span>&nbsp;
              <span className="rev">(525 reviews)</span>
            </div>
            <div className="stock">
              <CheckCircleIcon
                style={{ fill: "#82b520", fontSize: "medium" }}
              />
              <span> In stock</span>
            </div>
            <Divider />
            <div className="mrp">
              <div className="new">{inddata.price && inddata.price.new}</div>
              &nbsp;&nbsp;
              <div className="old">{inddata.price && inddata.price.old}</div>
              &nbsp;&nbsp;
              <div className="dis">
                {inddata.price && inddata.price.discount}
              </div>
            </div>
            <Divider />

            <p style={{ marginBottom: "0.5em", marginTop: "1em" }}>
              <span style={{ fontSize: "1.1em" }}>Quick Overview:</span>
              <br></br>
              <span
                style={{ fontSize: "0.8em", fontWeight: "600", color: "#778" }}
              >
                Expected delivery date: {date1}
              </span>
            </p>

            <p className="description">{inddata.description}</p>
          </div>
        </div>
      )}
      {!inddata ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
