import React, { useContext } from "react";
import { LoginContext } from "../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./buy.css"

const Option = ({ deletedata, get }) => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  const removedata = async (req, res) => {
    try {
      const res = await fetch(`remove/${deletedata}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log("error present during item removal from cart");
      } else {
        setAccount(data);
        get();
        console.log("item removed successfully");
        toast.success("Item deleted successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
 {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
  return (
    <div className="add_remove_select" key={deletedata}>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => removedata(deletedata)}>
        Delete
      </p>
      <span>|</span>
      <p className="forremovemedia">Save for Later</p>
      <span>|</span>
      <p className="forremovemedia">See More like this</p>
      <ToastContainer />
    </div>
  );
};

export default Option;
