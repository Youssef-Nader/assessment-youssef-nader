import { useContext, useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { productsDetails } from "./Contexts/ProdcutsContext";
import { CartContext } from "./Contexts/CartContext";
import ConfirmationMessage from "./ConfrimationMessage";

function ProductDetail(){
    const [quantity, setQuantity] = useState(1);
    const {productId, categoryId} = useParams();
    const category = useContext(productsDetails);
    const {addToCart} = useContext(CartContext);
    const [message, setMessage] = useState(false)

    function handleDecrease() {
        if(quantity > 1)
            setQuantity(quantity - 1);
    }
    function handleIncrease() {
        setQuantity(quantity + 1);
    }
    
    function handleAddToCart(prod){
        addToCart(prod, quantity);
        setMessage(true)
        setTimeout(()=> setMessage(false),2000)
    }

    useEffect(()=>{
            category.find((c)=> {
                if(c.id == categoryId){
                    c.products.find((p)=>{
                        if(p.id == productId)
                            document.title = `SafeZone PPE Store | ${p.name}`;
                    })
                }
            })
        },[category, categoryId, productId])


    const categoryList = category.map((c)=>{
        if(c.id == categoryId)
            return(
                <>
                    {c.products.map((prod)=>{
                        if(prod.id == productId)
                            return(
                                <div className = "product-detail">
                                    <div className="product" key={prod.id}>
                                        <h3>{prod.name}</h3>
                                        <img src={prod.image_url} alt={prod.name} />
                                        <h4>{prod.description}</h4>
                                        <p>Price : <span>${prod.price}</span></p>
                                        <div className="quantity">
                                            <button onClick={handleDecrease}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={handleIncrease}>+</button>
                                        </div>
                                    <button className="add-cart" onClick={()=> {handleAddToCart(prod)}}>Add to Cart</button>
                                    </div>
                                    {message && <ConfirmationMessage/>}
                                </div>
                            )
                    })}
                </>
            )
    })

    return (
        <>
            {categoryList}
        </>
    )
}
export default ProductDetail;
