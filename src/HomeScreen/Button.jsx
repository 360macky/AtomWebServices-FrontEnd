import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./style/HomeScreen.css";

import { AuthContext } from '../Context/auth';

export const Button = (props) => {

    const { logout } = useContext(AuthContext);

    return (
        <Link className="HomeScreen__button" onClick={logout} to="/">
            Cerrar Sesión
        </Link>
    )
}
