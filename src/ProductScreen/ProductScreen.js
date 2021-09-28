import React, { Component } from 'react'

export default class ProductScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            description: '',
            image: '',
            price: 0,
        }
    }
    render() {
        return (
            <section className="ProductSreen__main-container">
                <div className="ProductSreen__main-container">
                </div>
                <h1>{this.state.name}</h1>
                <h2>Price: ${this.state.price}</h2>
                <img src={this.state.price} alt={'Product description'} />
            </section>
        )
    }
}
