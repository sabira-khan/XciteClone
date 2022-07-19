import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';


const Right = ({item}) => {

  const [val, setVal] = useState(false);

  const [price, setPrice] = useState(0);

  const history = useHistory("");

  useEffect(() => {
      totalAmount();
  }, [item]);

  const totalAmount = () => {
      let price = 0
      item.map((items) => {
          price += items.price.cost
      });
      const priceFinal = price.toFixed(2)
        setPrice(priceFinal)
  }

  const proceesby = ()=>{
      alert("Your Order is Confirmed");
      history.push("/");
  }


  return (
    <div className='right_buy'>
        <img src="" alt="" />
        <div className="cost_right">
            <p>Your order is eligible for Free Delivery</p>
            <span style={{ color: "#565959" }}>Select "FREE Delivery" at checkout</span>
            <h5>Total ({item.length} items):<span style={{ fontWeight: "800" }}>
                <br/>KD {price}</span></h5>
            <button className='rightbuy_btn'>Proceeed to buy</button>
            <div className="emi">Installments Payment Available</div>
        </div>
    </div>
  )
}

export default Right