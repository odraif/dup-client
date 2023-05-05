import FirstContent from "./content/Intro";
import NavBar from "./nav/Navbar";

function Home() {
    return (
        <>
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className="introCentre">
                    <FirstContent></FirstContent>
                </div>
            </div>
        </>
    )
}
export default Home;
