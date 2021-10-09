import Login from "./Login/auth";
import Register from "./Login/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductScreen from "./ProductScreen/ProductScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import AddScreen from "./AddScreen/AddScreen";
import { AuthProvider } from './Context/auth';
import AuthRoute from './Utils/AuthRoute';
import Home from "./HomeScreen/Home";
import CreateScreen from "./AddScreen/CreateScreen";
import EditScreen from './AddScreen/EditScreen';

//NOTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
   
            <AuthRoute exact path="/" component={Login} exact/>
            <Route path="/register" component={Register} exact />
            <Route path="/home" component={Home} exact/>
            <Route path="/add" component={CreateScreen} exact/>
            <Route path="/edit/:id" component={EditScreen} />
            <Route path="/product/:productId" component={ProductScreen} exact/>
            <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
