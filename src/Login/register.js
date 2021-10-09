import './style/auth.css'

//import backgroundImage from './style/preview.jpg'
import {Link} from "react-router-dom"
//import Login from "./auth"
import * as React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
//import ButtonGroup  from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { makeStyles } from '@mui/styles'

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

export const Register = () =>{
    const classes = useStyle()
        return (
            <div className="container_box">
                <div className="login_container">
                    <div className="login_Left">
                        <h1>Ingreso a almacén</h1>
                        <img className="img-fluid" src={public_data+"/img/book.png"} alt="background-login" />
                    </div>
                    <div className="login_Right">
                        <h1 >Registro</h1>
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
                            }} id="input_user" label="Username" variant="standard" color="success"  />
                            <TextField InputProps={{
                                classes: {
                                input: classes.textField
                            }}} id="input_name" autoComplete="current-password" label="Name" variant="standard" color="success"/>
                            <TextField InputProps={{
                                classes: {
                                input: classes.textField
                            }}} id="input_lastname" autoComplete="current-password" label="Lastname" variant="standard" color="success"/>
                            <TextField InputProps={{
                                classes: {
                                input: classes.textField
                            }}} id="input_pass" type="password" autoComplete="current-password" label="Password" variant="standard" color="success"/>
                            <div className="btn_options">
                                <div className="container_btn_options">
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained" color="success" fullWidth>Register</Button>
                                        <Button variant="contained" color="error" fullWidth>
                                            <Link className={classes.link} to="/">
                                                Back
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
export default Register