import {Link} from "react-router-dom"
function Navbar(){
    return (
        <nav>
            <h1><Link to ="/home">SafeZone <span>PPE Store</span></Link></h1>
            <div className ={"buttons"} >   
                <Link to ="/"><button>Home</button></Link>
                <Link to ="/products"><button>Products</button></Link>
                <Link to ="/cart"><button>Cart</button></Link>
                <div className ={"login-register"}>
                    <Link to ="/login"><button>Login</button></Link>
                    <Link to ="/register"><button>Register</button></Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;