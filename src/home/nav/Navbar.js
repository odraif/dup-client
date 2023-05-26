import React from "react";
import logo from "./logo.png";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
function NavBar(props) {
    const {go}=props;
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
                    <Link onClick={()=>go(0)} >
                      <img src={logo} alt="dup logo" className="logo" />
                    </Link>
                        <Link onClick={()=>go(2)} className="menu">Nos projet</Link>
                        <Link onClick={()=>go(3)} className="menu">Contact</Link>
                        <Link onClick={()=>go(1)} className="menu">Calculateur</Link>
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