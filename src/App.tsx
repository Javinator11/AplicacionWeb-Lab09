import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./containers/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import CartModal from "./containers/CartModal/CartModal";
import Cart from "./types/Cart";
import Helper from "./tools/SessionStorageHelper";
import Sku from "./types/Sku";

interface AppState {
  cartOpen: boolean;
  cart: Cart;
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
class App extends React.Component<{}, AppState> {
  state = {
    cartOpen: false,
    cart: {} as Cart,
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Header openCart={this.handleOpenCart} cart={this.state.cart}/>
          <Routes openCart={this.handleOpenCart}/>
          <CartModal
            isCartVisible={this.state.cartOpen}
            closeCart={this.handleCloseCart}
            removeCart={this.handleRemoveCart}
            cart={this.state.cart}
          />
        </BrowserRouter>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    this.setState({ cart: Helper.getCart() });
  };

  handleCloseCart = (event: any) => {
    this.setState({ cartOpen: false });
  };

  handleOpenCart = (event: any) => {
    this.setState({ cartOpen: true, cart: Helper.getCart() });
  };

  handleRemoveCart = (event: any, sku: Sku) => {
    this.state.cart.removeItem(sku);
    Helper.updateCart(this.state.cart);
    this.setState({ cart: Helper.getCart() });
  };
}

export default App;
