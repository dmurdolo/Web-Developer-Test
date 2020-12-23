function QuantityInput(props) {
    return (
        <div className="cart-quantity">
            <button className="cart-btn decrease" onClick={() => props.handleDecreaseQuantity(props.item)}>-</button>
            <input type="number" step={1} min={0} value={props.item.quantity && props.item.quantity} onChange={(e) => props.handleUpdateQuantity(e, props.item)} onBlur={() => props.handleCheckQuantity(props.item)}></input>
            <button className="cart-btn increase" onClick={() => props.handleIncreaseQuantity(props.item)}>+</button>
        </div>
    );
}

export default QuantityInput