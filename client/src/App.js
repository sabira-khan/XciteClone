import "./App.css";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/Menu";
import Top from "./components/topbar/Top";
import Main from "./components/home/Main";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";
import Cart from "./components/cart/Cart";
import Buy from "./components/buy/Buy";
import SignUp from "./components/sign/SignUp";
import SignIn from "./components/sign/SignIn";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Modal from "./components/modals/Modal";
import { Route, Switch } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [data, setData] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <Top />
          <Navbar />
          <Menu />
          {/* In react router dom 6, replace with routes */}
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
          
              <Main />
            </Route>
            <Route exact path="/register">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/getproductsone/:id">
              <Cart />
            </Route>
            <Route exact path="/buynow">
              <Buy />
            </Route>
          </Switch>
          <Newsletter />
          <Footer />
          {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2> Loading...</h2>
        </div>
      )}
    </>
  );
}

export default App;
