import { useState } from "react";
import FirstContent from "./content/Intro";
import NavBar from "./nav/Navbar";
import Calculator from "../calculator/Calculator";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NP from "../nosprojet/NP";

function Home() {
    const [page, setpage] = useState(0);

    const custpage = (val) => {
        setpage(val)
    }


    switch (page) {
        default:
            return (
                <>
                    <div>
                        <div>
                            <NavBar go={custpage}></NavBar>
                        </div>
                        <div className="introCentre">
                            <FirstContent
                            next={custpage}
                            ></FirstContent>
                        </div>
                    </div>
                </>
            )
        case 1://calculator
            return (
                <>
                
                    <div>
                        <div>
                            <NavBar go={custpage}></NavBar>
                        </div>
                        <div ><FontAwesomeIcon icon={faArrowLeft} className="back-arrow dont-print" onClick={()=> custpage(0)} title="Home page"></FontAwesomeIcon></div>
                        <div className="body-calcul">
                            <Calculator ></Calculator>
                        </div>
                    </div>
                </>
            )
        case 2:
            return(
                <div>
                <div>
                    <NavBar go={custpage}></NavBar>
                </div>
                <div ><FontAwesomeIcon icon={faArrowLeft} className="back-arrow dont-print" onClick={()=> custpage(0)} title="Home page"></FontAwesomeIcon></div>
                <div className="body-calcul">
                    <NP></NP>
                </div>
            </div>
            )
    }

}
export default Home;
