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
            <header>
                <nav>
                    <div className="topnav" id="myTopnav">
                        <img src={logo} alt="" className="logo" />
                        <Link to="" className="active">Contact</Link>
                        <Link to="">Calculateur</Link>
                        <Link to="">A props</Link>
                        <Link to="">About us</Link>
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