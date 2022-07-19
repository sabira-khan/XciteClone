import React, { useContext, useState } from 'react'
import "./sign_in.css";
import key from "./signAssets/key.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/ContextProvider";

const SignIn = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  const { account, setAccount } = useContext(LoginContext);

  // console.log(logdata)

  const addData = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    // console.log(email);
    // try {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      // console.log("invalid details");
      toast.warn("Invalid Details. Please Try Again.", {
        position: "top-center",
      });
    } else {
      setAccount(data);
      setData({ ...logdata, email: "", password: "" });
      toast.success("Login Successful!", {
        position: "top-center",
      });
    }
    // } catch (error) {
    //      {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
    // }
  };

  return (
    <section className="signin">
      <div className="sign_container">
        <div className="sign_header">
          <div>
            <h3 className="one">Existing User Login</h3>
            <p className="two">Enter your email and password to login:</p>
          </div>
          <div>
            <img src={key} alt="signupimg" />
          </div>
        </div>
        <div className="sign_form">
          <form method="POST">
            <div className="form_data">
              <label className="text" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={addData}
                value={logdata.email}
              ></input>
            </div>

            <div className="form_data">
              <label className="text" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={addData}
                value={logdata.password}
              ></input>
            </div>
            <button className="signin_btn" onClick={senddata}>
              Login
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <NavLink to="/register">
            <button>Create Account</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
