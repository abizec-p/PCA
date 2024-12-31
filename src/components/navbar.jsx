import {Link} from "react-router-dom" 
import './navbar.css'
import logo from "../assets/images/logo-png.png"



export default function Navbar(){
    return(
        < section className="navigation">
        <div className="logo">
<img src={logo} alt="pariyar-logo" />
        </div>
        <div className="menu-items">
            <Link to="/">Home            </Link>
            <Link to="/">Our Works</Link>
            <Link to="/">About us</Link>
            <Link to="/">Services</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Insights</Link>


        </div>
        <div className="right-menu">
            <Link to="/">FAQ</Link>
            <Link to="/">Contact</Link>
        </div>

        
        </section>
    )
}