import React from 'react';
import products from '../../data/products';
import './ListProducts.css'

export default props => {

    const productsTd = products.map((product, id) => {
        return (
            <tr key={ product.id } className={ id % 2 === 0 ? 'Even' : '' }>
                <td>{ product.id }</td>
                <td>{ product.description }</td>
                <td>{ product.price.toFixed(2).replace('.', ',') }</td>
            </tr>
        )
    });

    return (
        <div className="ProductList">
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    { productsTd }
                </tbody>
            </table>
        </div>
        
    );
}