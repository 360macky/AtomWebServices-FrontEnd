import Login from './Login/auth'
import Register from './Login/register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductScreen from './ProductScreen/ProductScreen';
import HomeScreen from './HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/product/:productId" component={ProductScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
