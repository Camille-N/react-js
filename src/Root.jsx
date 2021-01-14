import React, { Component, Fragment } from "react";
import { products } from './data/products';
import EshopNavbar from './components/eshop/eshopNavbar';
import EshopBasket from './components/eshop/eshopBasket';
import EshopCard from './components/eshop/eshopCard';
import EshopList from './components/eshop/eshopList';
import EshopChangeButtons from './components/eshop/eshopChangeButtons';

class Root extends Component {

  state = {
    products,
    displayedProducts: [],
    startIndex: 0,
    filter: '',
    basket: {
      itemNumber: 0,
      totalPrice: 0
    }
  }

  render() {
    return (
      <Fragment>

        <EshopNavbar />

        <br />        

        <EshopBasket 
          itemNumber={this.state.basket.itemNumber}
          totalPrice={this.state.basket.totalPrice}
        />

        <br />

        <EshopList 
          displayedProducts={this.state.displayedProducts}
          current={this.state.startIndex +2}
        />

        <EshopChangeButtons
          onPrevProduct={this.handlePrevProduct}
          onNextProduct={this.handleNextProduct}
        />

        <EshopCard 
          product={this.state.products[(this.state.startIndex +2)]}
          onAddToBasket={this.handleAddToBasket}
        />
      </Fragment>
    )
  }

  handleNextProduct = () => {
    let { products, startIndex } = this.state;
    let newStartIndex = startIndex === (products.length -1) ? 0 : startIndex +1;
    let displayedProducts= products.slice(newStartIndex, (newStartIndex + 5));

    this.setState({
      startIndex: newStartIndex,
      displayedProducts
    })
  }

  handlePrevProduct = () => {
    let { products, startIndex } = this.state;
    let newStartIndex = startIndex === 0 ? (products.length -1) : startIndex +1;
    let displayedProducts= products.slice(newStartIndex, (newStartIndex + 5));

    this.setState({
      startIndex: newStartIndex,
      displayedProducts
    })
  }

  componentDidMount = () => {
    let { products, startIndex } = this.state;
    let displayedProducts = products.slice(startIndex, (startIndex + 5));
    this.setState({
      displayedProducts
    })
  }

  handleAddToBasket = () => {
    let { products, startIndex } = this.state;
    let { itemNumber } = this.state.basket;
    let currentProduct = products[(startIndex +2)];

    itemNumber += 1;
    console.log('Add to basket', currentProduct.productName);
    console.log('itemNumber', itemNumber);

    this.setState({
      itemNumber
    })
  }
}

export default Root;
