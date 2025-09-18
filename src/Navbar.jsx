import { Link, NavLink } from "react-router";
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
                <NavLink  className="link"><h2>Logo</h2></NavLink>
            
            <div>
                <ul>
                    <li>
                        <NavLink className="link" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )


}
