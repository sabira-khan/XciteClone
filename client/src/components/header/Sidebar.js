import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/ContextProvider";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import TranslateIcon from "@mui/icons-material/Translate";
import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"

const Sidebar = ({logClose, logout}) => {
  const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="sidebar">
        <div className="left_nav" onClick={()=>logClose()}>
          <div className="home" align="left">
            <HomeIcon style={{ color: "#fff" }} />
            <p className="h"> Home</p>
          </div>
          <div className="lang">
            <TranslateIcon style={{ color: "#fff" }} />
            <p className="l">العربية</p>
          </div>
          <div className="acc">
            {!account ? (
              <NavLink
              to="/login"
              className="personal"
              style={{ textDecoration: "none" }}
            >
              <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
              <p className="s">Login</p>
            </NavLink>
            
            ) : (
              <NavLink className="personal" to="" onClick={()=>logout()}
            >
            
              <LogoutIcon style={{ color: "#fff" }}  />
              <p className="s" >Logout</p>
       
              
            </NavLink>
            )}
            {account ? (
              <NavLink
                to="/buynow"
                className="personal"
                style={{ textDecoration: "none" }}
              >
                <ShoppingCartOutlinedIcon style={{ color: "#fff" }} />
                <p className="s">Orders</p>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="personal"
                style={{ textDecoration: "none" }}
              >
                <ShoppingCartOutlinedIcon style={{ color: "#fff" }} />
                <p className="s">Orders</p>
              </NavLink>
            )}
          </div>
          <div className="link"  onClick={()=>logClose()}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="x">Daily Deals</p>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="x">Apple Products</p>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="x">Brand Stores</p>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="x">Digital Cards</p>
            </NavLink>
          </div>
        </div>

        <div className="sidebar2">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
