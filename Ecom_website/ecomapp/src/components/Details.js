import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button.js';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End of Title */}
                            {/*product Info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span> {company} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price :  <span>$</span>{price}</strong></h4>
                                    <p className="texr-capitalize font-weight-bold mt-3 mb-0">Some info about the product</p>
                                    <p classname="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to Product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addTocart(id)
                                        }}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}
