import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <div style={{textAlign:"center"}} >
        <h1>Page Not Found</h1>
        <h1>404 Page</h1>
        <div>
            <Link to="/">Go To Home Page</Link>
        </div>
        </div>
    )
}