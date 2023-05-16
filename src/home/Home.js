import { useState } from "react";
import FirstContent from "./content/Intro";
import NavBar from "./nav/Navbar";
import Calculator from "../calculator/Calculator";
import Backv from "./content/backv";
import "./style.css"

function Home() {
    const [page, setpage] = useState(1);
    const nextpage = () => {
        setpage(page + 1)
    }
    const backpage = () => {
        setpage(page - 1)
    }
    switch (page) {
        case 1:
            return (
                <>
                    <div>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div className="introCentre">
                            <FirstContent
                            next={nextpage}
                            back={backpage}
                            ></FirstContent>
                        </div>
                    </div>
                </>
            )
        case 2:
            return (
                <>
                
                    <div>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div className="body-calcul">
                            <Calculator ></Calculator>
                        </div>
                    </div>
                    <Backv></Backv>
                </>
            )
    }

}
export default Home;
