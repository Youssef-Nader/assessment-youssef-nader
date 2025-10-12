import { useContext, useEffect } from "react";
import {productsDetails} from "./Contexts/ProdcutsContext"
import { Link, useParams } from "react-router-dom";

function ProductCategory(){

    const category = useContext(productsDetails);
    const {categoryId} = useParams()

    useEffect(()=>{
        category.find((c)=> {
            if(c.id == categoryId)
                document.title = `SafeZone PPE Store | ${c.name}`;
        })
    },[category, categoryId])
    
    const categoryList = category.map((c)=>{
        if(c.id == categoryId){
            return (
                <section className="product-category">
                    <h2>{c.name}</h2>
                    <div className="category" key={c.id}>
                        {c.products.map((product)=>{
                            return(
                                <div className = "product" key={product.id}>
                                    <span><img src = {product.image_url} alt={product.name} /></span>
                                    <div class="product-text">
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <button><Link to = {`${product.id}`}>View More</Link></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            )
        }
    })
    return(
        <>
            {categoryList}
        </>
    )
}
export default ProductCategory;