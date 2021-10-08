import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Data.js';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[]
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        });
    };
    getitem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = id => {
        const product = this.getitem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    };
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getitem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
