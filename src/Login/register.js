import './style/auth.css';
import backgroundImage from './style/preview.jpg'
import {Link} from "react-router-dom"

const public_data = process.env.PUBLIC_URL;

export const Register = () =>{
    return (
        <div className="container_box">
            <div className="login_container">
                <div className="login_Left">
                    <h1>Ingreso a almacén</h1>
                    <img className="img-fluid" src={public_data+"/img/book.png"}/>
                </div>
                <div className="login_Right">
                    <h1>Registro de datos</h1>
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Age"/>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <div className="btn_options">
                            <div className="container_btn_options">
                                <button className="btn-register" type="button">Register</button>
                                <Link to="/" className="btn-submit">Volver</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register