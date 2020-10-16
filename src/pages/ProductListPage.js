import React from 'react';
import {Link} from 'react-router-dom'

const products = ["car", "bike", "motor"]

const ProductListPage = () => {

    const list = products.map(p => (
        <li key = {p}>
            <Link to = {`/product/${p}`}>{p}</Link>
        </li>
    ))

    return ( 
        <div className = "products">
            
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            
            
        </div>
     );
}
 
export default ProductListPage;