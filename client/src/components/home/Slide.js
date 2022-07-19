import React, { useState } from "react";
import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ p, title }) => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">VIEW ALL</button>
      </div>
      <Divider sx={{ borderBottomWidth: 0.05 }} className="divider" />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        swipeable={true}
        centerMode={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        navButtonsProps={{
          style: {
            marginTop: -22,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            borderRadius: 0,
          },
        }}
      >
        {p.map((e) => {
          return (
            <NavLink to={`/getproductsone/${e.id}`} key={e.id}>
              <div className="products_items" >
                <span className="tagline">{e.tagline}</span>
                <button
                  className="fav"
                  type="button"
                  onClick={() => setFavourite(!favourite)}
                >
                  {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
                <img src={e.url} alt="product" className="product_img" />

                <div className="products_name">{e.title}</div>
                <div className="products_offer">{e.price.new}</div>
                <div>
                  <span className="old">{e.price.old}</span>
                  <span className="save">{e.price.discount} </span>
                </div>
                <p className="tagline">{e.tagline}</p>
                <br></br>
                <div className="sold">Sold by X-cite</div>
                <div>
                  <span className="fulfill">
                    <CheckCircleIcon fontSize="small" /> Fulfilled By X-cite
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
