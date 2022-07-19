import React from "react";
import Carousel from "react-material-ui-carousel";
import "../home/banner.css";
import t1 from "./assets/t1.jpg";
import t2 from "./assets/t2.jpg";
import t3 from "./assets/t3.jpg";
import t4 from "./assets/t4.jpg";
import t5 from "./assets/t5.jpg";
import t6 from "./assets/t6.jpg";
import t7 from "./assets/t7.jpg";
import t8 from "./assets/t8.jpg";
import t9 from "./assets/t9.jpg";
import t10 from "./assets/t10.jpg";
import t11 from "./assets/t11.jpg";
import t12 from "./assets/t12.jpg";
import t13 from "./assets/t13.jpg";
import t14 from "./assets/t14.jpg";
const data = [
  { id: "pt1", src: t1 },
  { id: "pt2", src: t2 },
  { id: "pt3", src: t3 },
  { id: "pt4", src: t4 },
  { id: "pt5", src: t5 },
  { id: "pt6", src: t6 },
  { id: "pt7", src: t7 },
  { id: "pt8", src: t8 },
  { id: "pt9", src: t9 },
  { id: "pt11", src: t11 },
  { id: "pt12", src: t12 },
  { id: "pt10", src: t10 },
  { id: "pt13", src: t13 },
  { id: "pt14", src: t14 },
];

const Banner = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            marginTop: -22,
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            borderRadius: 0,
          },
        }}
      >
        {data.map((e) => {
          return (
            <div className="back">
              <img src={e.src} alt="img" key={e.id} className="banner_img" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
