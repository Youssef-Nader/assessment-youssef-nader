import {Link ,Outlet} from "react-router-dom"
import { useContext, useEffect } from "react"
import { allCategories } from "./Contexts/CategoriesContext"

function Products (){
    const categories = useContext(allCategories);
    useEffect(()=>{
        document.title = `SafeZone PPE Store | Products`;
    }, []);
    const categoriesList = categories.map((category)=>{
        return(
            <li key={category.id}>
                <Link to = {`category/${category.id}`}>
                    {category.title}
                </Link>
            </li>
        )
    })
    return (
        <section className="products" style={{minHeight : "70vh"}}>
            <div className="container">
                <ul className="categories">
                    {categoriesList}
                </ul>
                <Outlet />
            </div>
        </section>
    )
}
export default Products;