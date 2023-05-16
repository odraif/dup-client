import { useState } from "react";
import FirstContent from "./content/Intro";
import NavBar from "./nav/Navbar";
import Calculator from "../calculator/Calculator";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [page, setpage] = useState(1);
    const nextpage = () => {
        setpage(page + 1)
    }
    const backpage = () => {
        setpage(page - 1)
    }


    switch (page) {
        default:
            return (
                <>
                    <div>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div className="introCentre">
                            <FirstContent
                            next={nextpage}
                            ></FirstContent>
                        </div>
                    </div>
                </>
            )
        case 1:
            return (
                <>
                
                    <div>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div ><FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={()=> backpage()} title="Home page"></FontAwesomeIcon></div>
                        <div className="body-calcul">
                            <Calculator ></Calculator>
                        </div>
                    </div>
                </>
            )
    }

}
export default Home;
