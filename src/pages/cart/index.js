import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import data from '../../../data/products/index.json'

const Cart = () => {
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const [cartItems, setCartItems] = useState(data && data.items);

    // Add some quantities for initial test purposes on mount
    useEffect(() => {   
        cartItems && cartItems.map(item => {
            item.quantity = 1;
        });
        
    }, []);

    // Calculate the item total, subtotal, tax and overall total on update
    useEffect(() => {
        setCartSubtotal(cartItems.reduce((prev, cur) => {
            return prev + cur.total;
        }, 0));
        
        setCartTax(Math.round(((cartSubtotal * .2) + Number.EPSILON) * 100) / 100);
        setCartTotal(Math.round(((cartSubtotal + cartTax) + Number.EPSILON) * 100) / 100);
    }, [cartItems, cartSubtotal, cartTax]);

    // Update quantity
    const updateQuantity = (event, item) => {
        console.log(item);
    }

    // On quantity change updated the item total
    const updateItemTotal = (item) => {
        item.total = item.quantity * item.price;
        return item.total;
    }

    return (
        <div className="wrapper cart">
            <Head>
                <title>🛒 Your Basket | 💡 My App</title>
            </Head>
            <div className="container">
                <h1>Your basket</h1>
                <p>Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase.</p>
            </div>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 && cartItems.map(item => {
                            return (
                                <tr key={item.sku}>
                                    <td>{item.name} {item.size ? `, ${item.size}` : ', one size'}</td>
                                    <td>£{item.price}</td>
                                    <td><input type="number" value={item.quantity ? item.quantity : 0} onChange={(e) => updateQuantity(e, item)}></input></td>
                                    <td>£{updateItemTotal(item)}</td>
                                    <td><button className="bin"><Image src="/images/icon-bin.png" width={18} height={20} alt="Delete item" /></button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>Subtotal</td>
                            <td colSpan={2}></td>
                            <td>£{cartSubtotal}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>VAT at 20%</td>
                            <td colSpan={2}></td>
                            <td>£{cartTax}</td>
                            <td></td>
                        </tr>
                        <tr className="total">
                            <td>Total cost</td>
                            <td colSpan={2}></td>
                            <td>£{cartTotal}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td>
                                <button className="buy">Buy now</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart