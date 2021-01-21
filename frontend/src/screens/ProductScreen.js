import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data';


function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
            <div className = "back-to-results">
                <b><Link to="/">Back to results</Link></b>
                </div>
                <div className="details">
                    <div className="details-image">
                        <div>
                            <img src={product.image} alt="product" />
                        </div>
                   </div>
                   <div className="details-info">
                       <ul>
                            <li>
                             <h2><b>{product.name} </b></h2>
                            </li>
                            <li>
                            Price : <h2><b>{product.price} LKR </b></h2>
                            </li>
                            <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                                 
                            </li>
                            <li>
                                Description: <div>{product.description}</div>
                                </li>
                        </ul> 
                   </div>

                   <div className= "details-action">
                       <ul>
                            <li>
                               Price: {product.price} LKR
                           </li>
                      
                           <li>
                               Status: {product.status}
                           </li>
                           <li>
                               Qty: <select>
                                   <option> 1 </option>
                                   <option> 2 </option>
                                   <option> 3 </option>
                                   <option> 4 </option>
                                   <option> 5 </option>
                               </select>
                           </li>
                           <li>
                               <button className="button"> <h2><b>Add to Cart</b></h2> </button>
                           </li>
                       </ul>
               </div>
            </div>

      
    </div>

}
export default ProductScreen;