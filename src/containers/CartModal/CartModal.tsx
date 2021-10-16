import React from "react";
import CartInfo from "../../components/CartInfo/CartInfo";
import Cart from "../../types/Cart";
import Sku from "../../types/Sku";

interface CartProps {
  isCartVisible: boolean;
  closeCart(event: any): void;
  removeCart(event: any, sku: Sku): void;
  cart: Cart;
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
class CartModal extends React.Component<CartProps, {}> {
  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <CartInfo
        handleClose={this.props.closeCart}
        handleRemove={this.props.removeCart}
        open={this.props.isCartVisible}
        cart={this.props.cart}
      />
    );
  }
}

export default CartModal;
