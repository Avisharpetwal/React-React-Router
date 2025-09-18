import { Link } from "react-router";
import "./Header.css"
export function Navbar() {
    return (
        // <div>
        //     <Link to='/'>Home</Link>
        //     <br/>
        //     <Link to='/about'>About</Link>
        //     <br/>
        //     <Link to='/contact'>Contact</Link>
        //     <br/>

        // </div>
        <div>
            <div className="header">
                <Link  className="link"><h2>Logo</h2></Link>
            
            <div>
                <ul>
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )


}
