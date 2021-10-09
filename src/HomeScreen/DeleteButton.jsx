import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const DELETE_BOOK_MUTATION = gql`
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId)
    }
`;

export const DeleteButton = ({ id, callback }) => {

    const [deleteBook] = useMutation(DELETE_BOOK_MUTATION, {
        update(){
            //REMOVE THIS
            if(callback) callback();
        },
        variables: {
            bookId: id
        }
    })

    return (
        <button className="btn btn-danger" onClick={deleteBook} >
            Eliminar
        </button>
    )
}
