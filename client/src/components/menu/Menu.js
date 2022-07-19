import React from "react";
import { Link } from "react-router-dom";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MegaMenu from "./MegaMenu";
import "./menu.css";

const Menu = () => {

  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <div className="category">
            <MegaMenu/>
          </div>
        </div>
        <div className="middle_data">
          <ul className="link">
            <li>
              <a href="/#" style={{ color: "#71cef5" }}>
                Daily Deals
              </a>
            </li>
            <li>
              <a href="/#" style={{ color: "#ffc423" }}>
                Gift Cards
              </a>
            </li>
            <li>
              <a href="/#">Apple Products</a>
            </li>
            <li>
              <a href="/#" style={{ color: "#ffc423" }}>
                Brand Stores
              </a>
            </li>
          </ul>
        </div>
        <div className="right_data">
          <PhoneIphoneOutlinedIcon
            style={{ fill: "#68c3e8" }}
            color="primary"
          />
          <p className="app">Download Our App</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
