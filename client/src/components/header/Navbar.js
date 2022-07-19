import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { useHistory } from "react-router";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LoginContext } from "../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = () => {
  const history = useHistory("");
  const [drwOpen, setDrwOpen] = useState(false);
  const [text, setText] = useState('');
  const [liopen, setLiopen] = useState(true);
  const { products } = useSelector((state) => state.getproductsdata);
  const { account, setAccount } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getdetailsvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    //console.log(data);

    if (res.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid");
      setAccount(data);
    }
  };

  //LOGOUT USER
  const logOutUser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      history.push("/");
      setAccount(false);
      // setOpen(false)
      toast.success("Logged out successfully.", {
        position: "top-center",
      });
    }
  };

  const getText = (text) => {
    setText(text);
    setLiopen(false);
  };

  const handleClick2 = (e) => {
    setText('');
    setLiopen(true)
  };

  //FOR DRAWER
  const handleCloseDrw = () => {
    setDrwOpen(false);
  };
  const handleOpen = () => {
    setDrwOpen(true);
  };

  useEffect(() => {
    getdetailsvaliduser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="hamburger">
            <IconButton onClick={handleOpen}>
              <MenuIcon style={{ color: "#fff" }} fontSize="large" />
            </IconButton>
            <Drawer open={drwOpen} onClose={handleCloseDrw}>
              <Sidebar onClose={handleCloseDrw} logout={logOutUser} logClose={handleCloseDrw} />
            </Drawer>
          </div>

          <NavLink to="/">
            <img
              className="navlogo"
              src={process.env.PUBLIC_URL + "/xcite-logo-en.png"}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="middle">
          <div className="nav_searchbar">
            <span className="search_icon">
              <SearchIcon style={{ fill: "#949494" }} id="search" />
            </span>
            <input
              type="text"
              onChange={(e) => getText(e.target.value)}
              name=""
              placeholder="Search for products, categories, ..."
              id=""
              value={text}
            />
          </div>
          {text && (
        <List className="extrasearch" hidden={liopen}>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <NavLink
                  to={`/getproductsone/${product.id}`}
                  onClick={(e) => {handleClick2(e)}}
                
                >
                  {product.title}
                </NavLink>
              </ListItem>
            ))}
        </List>
      )}
        </div>
        <div className="right">
          <div className="lang-btn">العربية</div>
          {!account ? (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <div
                className="acc_btn"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleOutlinedIcon
                  style={{ fill: "#ffffff" }}
                  fontSize="large"
                />
                <p className="log">Login</p>
              </div>
 {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/register" style={{ textDecoration: "none" }}>
                    <span className="reg">Register</span>
                  </NavLink>
                </MenuItem>
              </Menu>
            </NavLink>
          ) : (
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <div className="acc_btn">
                <AccountCircleOutlinedIcon
                  style={{ fill: "#ffffff" }}
                  fontSize="large"
                />
                <p className="log" onClick={logOutUser}>
                  Logout
                </p>
              </div>
            </NavLink>
          )}
          {account ? (
            <NavLink to="/buynow" style={{ textDecoration: "none" }}>
              <div className="cart_btn">
                <span className="hd-minicart-badge" id="header-count">
                  {account.carts.length}
                </span>
                <ShoppingCartOutlinedIcon fontSize="large" id="icon" />
                <span className="c">My Cart </span>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <div className="cart_btn">
                <ShoppingCartOutlinedIcon fontSize="large" id="icon" />
                <span className="c">My Cart </span>
              </div>
            </NavLink>
          )}
        </div>
        <ToastContainer />
      </nav>
      <div className="hidden">
        <span className="search_icon">
          <SearchIcon style={{ fill: "#949494" }} id="search" />
        </span>
        <input
          type="text"
          name=""
          placeholder="Search for products, categories, ..."
          id=""
          onChange={(e) => getText(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar;
