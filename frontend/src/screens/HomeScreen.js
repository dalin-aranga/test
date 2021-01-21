import React, { useState, useEffect } from 'react';
import { Link , Route} from 'react-router-dom'
import ProductScreen from './ProductScreen';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions';
import SigninScreen from './SigninScreen';
import video from '../video/video.mp4';

function HomeScreen(props) {
  const productList = useSelector (state => state.productList);
  const { products, loading, error} = productList;
  const dispatch = useDispatch ();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])




    return( 
      <div>
        <div className="video">
        <video
           autoPlay 
           loop 
           muted
         >
         <source src= {video} type="video/mp4" />
        </video>
        </div>
        <ul className="products">
    {
      
       products && products.map(product =>
        <li key={product._id}>
        <div className="product">
        
        <Link to={'/product/' + product._id}>{<img className="product-image" src={product.image} alt="product"></img>}</Link>
        <Route path="/product" exact={true} component={ProductScreen}/>
        <Route path="/signin" exact={true} component={SigninScreen}/>
          
            <div className="product-name">
               <Link to={'/product/' + product._id}>{product.name}</Link>
           </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price} LKR</div>
            <div className="product-rating">{product.rating} Stars {product.numReviews} </div>

            
        </div>
    </li> )
    }

  </ul> 

      </div>
  
    
  )

  

}


export default HomeScreen;