import { useEffect } from "react"
function NotFound (){
    useEffect(()=>{
        document.title = `Not Found Page`;
    }, []);
    return (
        <div className ="not-found">
            <p>404, This Page Not Found</p>
        </div>
    )
}
export default NotFound