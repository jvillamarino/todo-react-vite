import React from "react";
import "./Card.css";

export const CardComponent = (props) => (
  <React.Fragment>
    <div className="card">
      <div className="card-header">
        <span className="card-header-title text-5xl font-bold">{props.title}</span>
      </div>
      <div className="card-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi beatae
          fugit saepe vitae doloremque earum nihil ipsa hic tempora! Animi quod
          repudiandae doloremque, ducimus numquam eaque? Rerum veniam excepturi
          perferendis.
        </p>
        <a> Add</a>
      </div>
    </div>
  </React.Fragment>
);
