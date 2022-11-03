import React from "react";
import { GoPlay } from "react-icons/go";
import "./Card.css";
const Card = ({ el }) => {
  return (
    <>
      <figure>
        <img src={el.img} alt="kkk"></img>
        <div className="Button"><GoPlay fill="#1ed760" size={50}/></div>
        <figcaption>
          <h3>{el.title}</h3>
          <small>{el.description}</small>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
