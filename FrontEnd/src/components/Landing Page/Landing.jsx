import NavBar from "./Navgation Bar/NavBar";
import AboutUs from "./About Us/AboutUs";
import styles from './Landing.module.scss'
import Welcome from "./Welcome/Welcome";
import Services from "./Services/Services";

function Landing() {
    return (
        < >
        <body className={`${styles.body}  `}>
           <NavBar/>
            <Welcome/>
            <AboutUs/>
            <Services/>
        </body>
        </>
    );
}

export default Landing;
