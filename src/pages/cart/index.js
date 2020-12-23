import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import data from '../../../data/products/index.json'
import QuantityInput from '../../components/QuantityInput'

const roundNumber = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

const displayAsDecimal = (amount) => {
    return amount.toFixed(2);
}

const Cart = () => {
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState(data && data.items.filter(item => item.stockLevel > 0));

    // Add some quantities for initial test purposes on mount
    useEffect(() => {   
        cartItems && cartItems.map(item => {
            item.quantity = 1;
        });        
    }, []);

    // Calculate the item total, subtotal, tax and overall total on update
    useEffect(() => {
        setCartSubtotal(
            cartItems ? roundNumber(cartItems.reduce((prev, cur) => {
                return prev + cur.total;
            }, 0)) : 0
        );
        
        setCartTax(roundNumber(cartSubtotal * .2));
        setCartTotal(roundNumber(cartSubtotal + cartTax));
    }, [cartItems, cartSubtotal, cartTax]);

    // Delete item and update cart
    const deleteItem = (sku) => {
        let updatedCart = cartItems.filter((item) => {
            return item.sku != sku;
        });

        setCartItems(updatedCart);
    }

    // Update quantity with number
    const updateQuantity = (e, item) => {
        const newQuantity = Number(e.target.value);

        if (newQuantity >= item.stockLevel) {
            item.quantity = item.stockLevel;
        } else if (newQuantity < item.stockLevel) {
            item.quantity = Number(newQuantity);
            item.total = updateItemTotal(item);
        }      

        let updatedItems = cartItems.map(el => el.sku === item.sku ? item : el);
        setCartItems(updatedItems);
    }

    // Increase quantity by 1
    const increaseQuantity = (item) => {
        if (item.quantity < item.stockLevel) {
            item.quantity += 1;
            item.total = updateItemTotal(item);
        }
        let updatedItems = cartItems.map(el => el.sku === item.sku ? item : el);
        
        setCartItems(updatedItems);
    }

    // Decrease quantity by 1
    const decreaseQuantity = (item) => {
        if (item.quantity > 0) {
            item.quantity -= 1;
            item.total = updateItemTotal(item);

            let updatedItems = cartItems.map(el => el.sku === item.sku ? item : el);    

            setCartItems(updatedItems);
        }
        
        if (item.quantity == 0) {
            deleteItem(item.sku);
        }
    }

    // On blur check the quantity amount
    const checkQuantity = (item) => {
        if (item.quantity == 0) {
            deleteItem(item.sku);
        }
    }

    // On quantity change updated the item total
    const updateItemTotal = (item) => {
        item.total = item.quantity * item.price;
        return roundNumber(item.total);
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
                <table id="cart-table">
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
                        {cartItems.length > 0 ? cartItems.map(item => {
                            return (
                                <tr className="cart-item" key={item.sku}>
                                    <td>{item.name}{item.size ? `, ${item.size}` : ', one size'}</td>
                                    <td>£{item.price}</td>
                                    <td><QuantityInput item={item} handleDecreaseQuantity={decreaseQuantity} handleIncreaseQuantity={increaseQuantity} handleUpdateQuantity={updateQuantity} handleCheckQuantity={checkQuantity} /></td>
                                    <td>£{displayAsDecimal(updateItemTotal(item))}</td>
                                    <td><button className="bin"><Image src="/images/icon-bin.png" width={18} height={20} alt="Delete item" onClick={() => deleteItem(item.sku)} /></button></td>
                                </tr>
                            )
                        }) : <tr className="no-items">
                                <td colSpan="5">No items added to your cart. Please add some <a href="/" title="Home">here</a></td>
                            </tr>}
                        <tr className="subtotal">
                            <td>Subtotal</td>
                            <td colSpan={2}></td>
                            <td>£{cartSubtotal}</td>
                            <td></td>
                        </tr>
                        <tr className="vat">
                            <td>VAT at 20%</td>
                            <td colSpan={2}></td>
                            <td>£{displayAsDecimal(cartTax)}</td>
                            <td></td>
                        </tr>
                        <tr className="total">
                            <td>Total cost</td>
                            <td colSpan={2}></td>
                            <td>£{displayAsDecimal(cartTotal)}</td>
                            <td></td>
                        </tr>
                        <tr className="buy">
                            <td colSpan={3}></td>
                            <td>
                                <button disabled={cartItems && cartItems.length == 0 ? true : false} className="buy">Buy now</button>
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