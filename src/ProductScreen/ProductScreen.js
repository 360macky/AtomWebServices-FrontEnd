import React, { Component } from "react";
import "./style/ProductScreen.css";
import { Link } from "react-router-dom";

export default class ProductScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Samsung X7 Prime",
      description: "Samsung fake what",
      image: "http://assets.stickpng.com/images/58ac4b8b0aaa10546adf2705.png",
      price: 0,
      stock: 0,
    };
  }
  render() {
    return (
      <div className="ProductScreen">
        <div className="ProductScreen__card">
          <div className="ProductScreen__image-container">
            <img
              className="ProductScreen_image"
              src={this.state.image}
              alt={"Product description"}
            />
          </div>
          <div className="ProductScreen__information">
            <h1>{this.state.name}</h1>
            <br />
            <p>{this.state.description}</p>
            <p>
              Precio:{" "}
              <span className="color-primary">S/{this.state.price}</span>
            </p>
            <p>
              Stock: <span className="color-primary">{this.state.price}</span>
            </p>
            <br />
            <Link to="/home" className="ProductScreen__button">
              Volver a la lista
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
