import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">DSVendas</h1>
                <p className="lead">Visualize the result of your sales here!</p>
                <hr />
                <p>Our dashboard shows you sales results through APIs created with Spring Boot.</p>
                <Link className="btn btn-primary btn-lg" to="/dashboard">
                    Go to dashboard
                </Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;