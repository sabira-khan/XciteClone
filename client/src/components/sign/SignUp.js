import React, { useState} from "react";
import "./sign_up.css";
import user from "./signAssets/user.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    repassword: "",
  });
  console.log(udata);

  const addData = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setUdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  //senddata function
  const senddata = async (e) => {
    e.preventDefault()

    const { fname, email, mobile, password, repassword } = udata;

    if (fname === "") {
      toast.warn("Please fill in your name", {
        position: "top-center",
      })
    } else if (mobile === "") {
      toast.warn("Please fill in your Phone number", {
        position: "top-center",
      })
    } else if (password === "") {
      toast.warn("Please fill in your Password", {
        position: "top-center",
      })
    } else if (repassword === "") {
      toast.warn("Please fill in your Password again", {
        position: "top-center",
      })
    } else {
       {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
    }
    // try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          mobile,
          password,
          repassword,
        }),
      });
      const data = await res.json();
      //  console.log(data);


      if (res.status === 422 || !data) {
        toast.warn("Invalid Details. Please try again.", {
          position: "top-center",
        });

    // alert("Invalid stuff")
      } else {
        toast.success("Registration Successful!", {
          position: "top-center",
        });
        // alert("Success")
        setUdata({
          //this will remove field values from screen after data has been added
          ...udata,
          fname: "",
          email: "",
          mobile: "",
          password: "",
          repassword: "",
        });
        
        
      }
    // } catch (error) {
    //   console.log("front end ka catch error hai" + error.message);
    // }
  };
  return (
    <section className="signup">
      <div className="sign_container">
        <div className="sign_header">
          <div>
            <h3 className="two">Create Account</h3>
          </div>

          <div>
            <img src={user} alt="signupimg" />
          </div>
        </div>
        <div className="sign_form">
          <form method="POST">
            <div className="form_data">
              <label className="text" htmlFor="fname">
                Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Your Name"
                onChange={addData}
                value={udata.fname}
              ></input>
            </div>
            <div className="form_data">
              <label className="text" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={addData}
                value={udata.email}
              ></input>
            </div>
            <div className="form_data">
              <label className="text" htmlFor="mobile">
                Phone
              </label>
              <input
                input
                type="text"
                pattern="[0-9]*"
                name="mobile"
                id="mobile"
                placeholder="Your Phone Number"
                onChange={addData}
                value={udata.mobile}
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
                value={udata.password}
              ></input>
            </div>

            <div className="form_data">
              <label className="text" htmlFor="repassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Re-type Password"
                onChange={addData}
                value={udata.repassword}
              ></input>
            </div>
            
            <button className="signin_btn" onClick={senddata}>
              Create An Account
            </button>
          </form>
        </div>
        <div className="signup_info">
          <h6 className="final">
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </h6>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignUp;
