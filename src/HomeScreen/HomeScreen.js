import React, { Component } from 'react'
import './style/HomeScreen.css'
import ProductScreen from '../ProductScreen/ProductScreen'

export default class HomeScreen extends Component {
    render() {
        return (
            <section className="HomeScreen">
              <h1 className="HomeScreen__title">Dashboard</h1>
                <div className="HomeScreen__buttons">
                    <button className="HomeScreen__button">Inicio</button>
                    <button className="HomeScreen__button">Refrescar los datos</button>
                    <button className="HomeScreen__button">Cerrar sesión</button>
                </div>
                <div className="HomeScreen__products">
                    Cargando productos...
                </div>
            </section>
        )
    }
}
