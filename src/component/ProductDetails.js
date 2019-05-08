import React, { Component } from 'react';
import './productDetails.css';

class ProductDetails extends Component {

    render(){
        const {product, closeDetails}=this.props;
        const {id,img,name, desc,price}=product;
        return(
     <div className="product-details">
     <div className="product-details__img-wrapper">
     <img className="product-details__image" src={img}/>
     </div>
     <button className="product-details__close-button" onClick={this.props.closeDetails}>X</button>
     </div>
        );
    }
}


export default ProductDetails;