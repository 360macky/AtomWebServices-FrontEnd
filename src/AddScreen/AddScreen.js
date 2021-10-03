import React, { Component } from 'react';
import './style/AddScreen.css';
import { Link } from 'react-router-dom';

export default class AddScreen extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      image: '',
      description: '',
      stock: 0,
      price: 0,
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleAdd = () => {};
  render() {
    return (
      <div className="AddScreen">
        <form className="AddScreen__form">
          <label className="AddScreen__label">Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            className="AddScreen__form__input"
          />
          <label className="AddScreen__label">Image (URL):</label>
          <input
            type="text"
            name="image"
            onChange={this.handleChange}
            value={this.state.image}
            className="AddScreen__form__input"
          />
          <label className="AddScreen__label">Description:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
            className="AddScreen__form__input"
          />
          <label className="AddScreen__label">Stock:</label>
          <input
            type="number"
            name="stock"
            onChange={this.handleChange}
            value={this.state.stock}
            className="AddScreen__form__input"
          />
          <label className="AddScreen__label">Price:</label>
          <input
            type="number"
            name="price"
            onChange={this.handleChange}
            value={this.state.price}
            className="AddScreen__form__input"
          />
          <input
            type="hidden"
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
          />
          <div className="AddScreen__buttons">
            <input
              type="button"
              className="AddScreen__submit"
              onClick={this.handleAdd}
              value="Agregar nuevo producto"
            />
          </div>
        </form>
      </div>
    );
  }
}
