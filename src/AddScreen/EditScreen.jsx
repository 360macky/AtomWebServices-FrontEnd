import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style/AddScreen.css';

import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';

const GET_BOOK_QUERY = gql`
    query($bookId: ID!){
        getBook(bookId: $bookId){
            id
            title
            author
            quantity
            createdAt
        }
    }
`;

const MODIFY_BOOK_MUTATION = gql`
    mutation modifyBook($bookId: ID!, $title: String!, $author: String!, $quantity: Int!){
        modifyBook(bookId: $bookId, title: $title, author: $author, quantity: $quantity) {
            id
        }
    }
`;

export default function EditScreen(props) {

    const bookId = props.match.params.id;

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState(0);

    const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
        variables: {
            bookId
        }
    });

    useEffect(() => {
        
        setTitle(data && data.getBook.title);
        setAuthor(data && data.getBook.author);
        setQuantity(data && data.getBook.quantity);

    }, [data]);

    const [modifyBook] = useMutation(MODIFY_BOOK_MUTATION, {
        update(){
            history.push('/home');
            setTitle('');
            setAuthor('');
            setQuantity('');
        },
        variables: {
            bookId: bookId,
            title: title,
            author: author,
            quantity: quantity
        }
    });

    function modifyBookCallback(e) {
        e.preventDefault();
        modifyBook();
    }

    return (
        <div className="AddScreen"  >
            <form className="AddScreen__form" onSubmit={modifyBookCallback} >
                {
                    loading ? (<div>loading...</div>) : (
                        <>
                            <label className="AddScreen__label">Titulo:</label>
                            <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="AddScreen__form__input"
                            />
                            
                            <label className="AddScreen__label">Autor:</label>
                            <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="AddScreen__form__input"
                            />
                            <label className="AddScreen__label">Cantidad:</label>
                            <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="AddScreen__form__input"
                            />
                            <div className="AddScreen__buttons">
                                <input
                                type="submit"
                                className="AddScreen__submit"
                                value="Actualizar libro"
                            />
                        </div>
                        </>
                    )
                }    
            </form>
      </div>
    )
}
