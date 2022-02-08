import React, { Component } from "react";
import axios from "axios";
import "./Cards.css";

class Cards extends Component {
  state = {
    forms: [],
  };

  async componentDidMount() {
    const { data: forms } = await axios.get(
      "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
      { mode: "cors" }
    );
    this.setState({ forms });
  }

  render() {
    return (
      <div className="cardContainer">
        {this.state.forms.map((forms) => (
          <div key={forms.created} className="cards">
            <h1>{forms.name}</h1>
            <p>{forms.description}</p>
            <a href={forms.link}>use template</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
