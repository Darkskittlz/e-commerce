import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Cart from "./pages/Cart";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  } from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";


const App = () => {
  const user = false
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/LoginPage">
          {/* {user ? <Redirect to="/"/> : <LoginPage />} */}
          <LoginPage />
        </Route>
        <Route path="/RegisterPage">
        {/* {user ? <Redirect to="/"/> : <RegisterPage />} */}
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;