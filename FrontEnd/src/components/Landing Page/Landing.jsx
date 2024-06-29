import NavBar from "./Navgation Bar/NavBar";
import AboutUs from "./About Us/AboutUs";
import styles from './Landing.module.scss'
import Welcome from "./Welcome/Welcome";

function Landing() {
    return (
        < >
        <body className={`${styles.body}`}>
           <NavBar/>
            <Welcome/>
            <AboutUs/>
        </body>
        </>
    );
}

export default Landing;
