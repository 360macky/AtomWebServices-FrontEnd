import React from "react";
import "./style/HomeScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from "react-router-dom";
import { Button } from "./Button";

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DeleteButton } from "./DeleteButton";

const FETCH_BOOKS_QUERY = gql`
    {
        getBooks{
            id
            title
            author
            quantity
            createdAt
        }
    }
`;



export default function Home() {

    const { loading, error, data: { getBooks } = {} } = useQuery(FETCH_BOOKS_QUERY, {
        fetchPolicy: "no-cache"
    });
    
    function deleteButtonCallback() {
        window.location.reload();
    }

    return (
        <section className="HomeScreen">
            <h1 className="HomeScreen__title">Dashboard</h1>
            <div className="HomeScreen__buttons" style={{padding: '10px'}}>
                <Link className="HomeScreen__button" to="/add">Agregar producto</Link>
                <Button />
            </div>
            <div className="HomeScreen__products">
                <div className="table-container">
                    <div className="ag-theme-balham">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">createdAt</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? (<div>loading</div>) : error ? (<div>{error}</div>) :
                                        getBooks && getBooks.map(product => (
                                            <tr key={product.id}>
                                                <th scope="row">{product.id}</th>
                                                <td>{product.title}</td>
                                                <td>{product.author}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.createdAt}</td>
                                                <td scope="row">
                                                    <Link to={`/edit/${product.id}`} className="btn btn-warning" >
                                                        Editar
                                                    </Link>
                                                    
                                                </td>
                                                <td scope="row">
                                                    <DeleteButton id={product.id} callback={deleteButtonCallback} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}
