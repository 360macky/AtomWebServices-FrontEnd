import { useState } from 'react';

export const useForm = (callback, initialState) => {
    
    const [state, setState] = useState(initialState);

    const onChange = ( value, campo ) => {
        setState({
            ...state,
            [campo]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    }
    
    return {
        onChange,
        onSubmit,
        state
    }

}
