import React from 'react';
import './style/AddScreen.css';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from '../hooks/useForm';

//NOTIFY
import { toast } from 'react-toastify';

const CREATE_BOOK_MUTATION = gql`
    mutation createBook($title: String!, $author: String!, $quantity: Int!){
        createBook(bookInput: {
            title: $title
            author:$author
            quantity: $quantity
        }) {
            id
            title
        }
    }
`;

export default function CreateScreen() {

    const { onChange, onSubmit, state } = useForm(createBookCallback, {
        title: '',
        author: '',
        quantity: 0,
    });

    const [createBook] = useMutation(CREATE_BOOK_MUTATION, {
        update(){
            state.title = '';
            state.author = '';
            state.quantity = 0;
        },
        variables: state
    });

    function createBookCallback(){

        createBook();
        toast.success('Se ha registrado un libro exitosamente :D');
    }

    return (
        <div className="AddScreen"  >
            <form className="AddScreen__form" onSubmit={onSubmit}>
                <label className="AddScreen__label">Name:</label>
                <input
                type="text"
                value={state.title}
                onChange={(e) => onChange(e.target.value, 'title')}
                className="AddScreen__form__input"
                />
                <label className="AddScreen__label">Autor:</label>
                <input
                type="text"
                value={state.author}
                onChange={(e) => onChange(e.target.value, 'author')}
                className="AddScreen__form__input"
                />
                <label className="AddScreen__label">Stock:</label>
                <input
                type="number"
                value={state.quantity}
                onChange={(e) => onChange(parseInt(e.target.value), 'quantity')}
                className="AddScreen__form__input"
                />
                <div className="AddScreen__buttons">
                    <input
                    type="submit"
                    className="AddScreen__submit"
                    value="Agregar nuevo libro"
                    />
                    <Link to="/home">
                        Volver
                    </Link>
            </div>
        </form>
      </div>
    )
}
