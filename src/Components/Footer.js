import { Link } from "react-router-dom";
function Footer(){
    return (
        <footer>
                <h2><Link to ="/home">SafeZone <span>PPE Store</span></Link></h2> 
                <p> Your trusted partner for safety & protective equipment.</p> 
                <p>Contact us: <a href="mailto:support@safezone.com">support@safezone.com</a>| +20 123 456 7890</p>
                <p>© 2025 <span>SafeZone</span>. All rights reserved.</p>
                
        </footer>   
    )
}
export default Footer;