import { useContext, useEffect } from "react";
import { CartContext } from "./Contexts/CartContext";

function Cart() {
    const { cart, updateQuantity, deleteProduct } = useContext(CartContext);
    useEffect(()=>{
            document.title = `SafeZone PPE Store | Cart`;
        }, []);

    if (cart.length === 0) {
        return (
            <div className="empty">
                <p>Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <div>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button
                            onClick={() => deleteProduct(item.id)}> Remove</button>
                        <span>Total: <span>${item.price * item.quantity}</span></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
