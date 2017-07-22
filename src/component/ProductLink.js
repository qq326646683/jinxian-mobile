import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd-mobile';
import './ProductLink.css';

 const ProductLink=(path)=>{
    return(
        <div className={'link-product'} >
            <Link to={'/product_'+path}>{'>>案例'}</Link>
        </div>
    )
}

export default ProductLink;