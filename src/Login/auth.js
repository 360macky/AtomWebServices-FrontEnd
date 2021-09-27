import Style from './style/auth.css';

const public_data = process.env.PUBLIC_URL;

export const Login = () =>{
    return (
        <div className="container">
            <div className="row vh-100 justify-content-around align-items-center ">
                <div className="col-sm-7 p5">
                    <div>
                        <img className="img-fluid m-1" src={public_data + './img/library.jpg'}></img>
                    </div>
                </div>
                <div className="col-sm-5 p5">
                    <form id="loginForm">
                        <div>
                            <h1 className="text-center text-dark">Login</h1>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Ingresar Usuario</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User"/>
                            <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary m-3">Submit</button>
                        <button type="submit" class="btn btn-success m-3">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login