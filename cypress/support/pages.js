import Global from "../pageElements/Global";
import Dashboard from "../pageElements/Dashboard";
import Login from "../pageElements/Login";
import Register from "../pageElements/Register";
import Home from "../pageElements/Home";
import Store from "../pageElements/Store";
import Product from "../pageElements/Product";
import Cart from "../pageElements/Cart";
import Checkout from "../pageElements/Checkout";

class Pages {
  constructor() {
    this.Global = Global;
    this.Dashboard = Dashboard;
    this.Login = Login;
    this.Register = Register;
    this.Home = Home;
    this.Store = Store;
    this.Product = Product;
    this.Cart = Cart;
    this.Checkout = Checkout;
  }
}

export default new Pages();
