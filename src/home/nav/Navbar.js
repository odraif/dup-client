import React from "react";
import logo from "./logo.png";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
function NavBar() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>
            <header className='dont-print'>
                <nav>
                    <div className="topnav" id="myTopnav">
                    <Link to="" >
                        <img src={logo} alt="" className="logo" />
                    </Link>
                        <Link to="" className="menu">Contact</Link>
                        <Link to="/calculator" className="menu">Calculateur</Link>
                        <Link to="" className="menu">A props</Link>
                        <Link to="" className="menu">About us</Link>
                        <button className="icon" onClick={myFunction}>
                            <MenuIcon></MenuIcon>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default NavBar;