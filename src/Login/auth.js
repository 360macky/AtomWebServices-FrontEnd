import React, { useContext, useState } from 'react'
import './style/auth.css'
import {Link} from "react-router-dom"

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { makeStyles } from '@mui/styles'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../Context/auth';
import { useForm } from '../hooks/useForm';

const public_data = process.env.PUBLIC_URL;

const useStyle = makeStyles({
    link:{
        color: "white",
        textDecoration: 'none',
        '&:hover':{ 
            color: "white"
        },
    },
    textField:{
        color: "#ffffff !important"
    }
})

const LOGIN_USER = gql`
  mutation login(
      $email: String! 
      $password: String!
    ) {
    login(
        email: $email, password: $password
    ) {
      id
      email
      createdAt
      token
    }
  }
`;

export const Login = (props) =>{

    const context = useContext(AuthContext);

    if(!context) {
        props.history.push('/home');
    }

    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, state } = useForm(loginUserCallback, {
        email: '',
        password: '',
    });

    const [ loginUser, { loading } ] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            context.login(userData);
            props.history.push('/home');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: state
    });

    function loginUserCallback(){
        loginUser();
    }

    const classes = useStyle()
    return (
        <div className="container_box">
            <div className="login_container">
                <div className="login_Left">
                    <h1>Ingreso a almacén</h1>
                    <img className="img-fluid" src={public_data+"/img/book.png"}/>
                </div>
                <div className="login_Right">
                    <h1 >Login</h1>
                    <Box component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField InputProps={{
                            classes: {
                            input: classes.textField
                        }
                        }} placeholder="Please enter your email" id="input_user" label="Email" variant="standard" color="success" value={state.email} onChange={(e) => onChange(e.target.value, 'email')} />
                        <TextField InputProps={{
                            classes: {
                            input: classes.textField
                        }}} placeholder="Please enter your password" id="input_pass" type="password" autoComplete="current-password" label="Password" variant="standard" color="success" value={state.password} onChange={(e) => onChange(e.target.value, 'password')} />
                        <div className="btn_options">
                            <div className="container_btn_options">
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" color="success" fullWidth onClick={onSubmit} >Login</Button>
                                    <Button variant="contained" color="info" fullWidth>
                                        <Link className={classes.link} to="/register">
                                            Register
                                        </Link>
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}
export default Login;