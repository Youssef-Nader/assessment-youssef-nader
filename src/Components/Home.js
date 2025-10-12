import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home (){
    useEffect(()=>{
            document.title = `SafeZone PPE Store`;
        }, []);
    return (
        <section className="home">
            <div className="container">
                <h2>Your Trusted Partner for Safety & <span>PPE</span> Equipment</h2>
                <p>At <span>SafeZone</span>, we provide high-quality safety and personal protective equipment <span>(PPE)</span> for businesses worldwide. 
                    From helmets and gloves to reflective vests and first-aid kits, our mission is to keep your team safe 
                    while you focus on growing your business.
                </p>
                <Link to = "/products">
                    <button>Browse Our Products</button>
                </Link>
            </div>
        </section>
    );
}
export default Home;