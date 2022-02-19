import React from "react";
import "./Cards.css";

function Cards({ forms }) {
  return (
    <div className="cardContainer">
      {forms.map((forms) => (
        <div key={forms.created} className="cards">
          <h3 className="head-style">{forms.name}</h3>
          <p className="des-style">{forms.description}</p>
          <a className="template-style" href={forms.link}>
            use template
          </a>
        </div>
      ))}
    </div>
  );
}

export default Cards;
