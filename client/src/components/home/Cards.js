import React from "react";
import CardMenu from "./CardData";
import Card from "react-bootstrap/Card";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="card_sec">
        {CardMenu.map(({ id, title, image, save }) => {
          return (
            
              <Card key={id} className="hove">
                <Card.Img variant="top" className="cd" src={image} />
                <Card.Body className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-1 p-0">{title}</h4>
                    <p>Save Up to <br/><span>{save}</span></p>
                  </div>
                </Card.Body>
                
              </Card>
           
          );
        })}
      </div>
    </>
  );
};

export default Cards;
