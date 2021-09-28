import './style/auth.css'
import backgroundImage from './style/preview.jpg'
import {Link} from "react-router-dom"
import Register from "./register"
const public_data = process.env.PUBLIC_URL;

export const Login = () =>{
    return (
        <div className="container_box">
            <div className="login_container">
                <div className="login_Left">
                    <h1>Ingreso a almacén</h1>
                    <img className="img-fluid" src={public_data+"/img/book.png"}/>
                </div>
                <div className="login_Right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <div className="btn_options">
                            <div className="container_btn_options">
                                <button className="btn-submit" type="submit">Login</button>
                                <Link to="/register" className="btn-register">Registro</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login