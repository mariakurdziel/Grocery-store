import React, { Component } from 'react';
import './productListItem.css';

const ProductListItem=({id, img, name, price,selectItem})=>{
    const onClick=()=>{
       return  selectItem(id);

    }
    return(
        <li className="product-list-item" onClick={onClick}>
            <div className="product-list-item__image-wrapper">
            <img className="product-list-item__image" src={img} alt=""/>

            </div>
            <div className="product-list-item__element">{name}</div>
            <div className="product-list-item__element">$ {price}</div>
        </li>
    );
}


export default ProductListItem;