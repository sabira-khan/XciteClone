import React, { useEffect } from "react";
import Banner from './Banner'
import Cards from "./Cards"
import Slide from './Slide'

import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";

import "./home.css"

const Main = () => {

  const { products } = useSelector(state => state.getproductsdata);


  console.log(products)

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

  //  {/* Coded by: Sabira Tahsin Khan, github: hello-sabira */}
  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner/>
        </div>
        <Cards/>
        <Slide  p={products.filter(obj=> obj.category === "dc")} title="Digital Cards"/>
        <Slide  p={products.filter(obj=> obj.category === "mp")} title="Phones"/>
        <Slide  p={products.filter(obj=> obj.category === "lp")} title="Laptops"/>
        <Slide  p={products.filter(obj=> obj.category === "tb")} title="Tablets"/>
    </div>

  )
}

export default Main