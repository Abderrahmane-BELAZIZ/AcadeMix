import styles from'./NavBar.module.scss'
import logo from "../../../assets/logo.png"
function NavBar() {
    return (
        <>
                <nav  className={`${styles.nav} bg-white shadow-md p-4 flex justify-between items-center`}>
                    <div className="flex items-center">
                        <img  className={`${styles.nav_logo} h-12 w-auto mr-8`}src={logo} alt="Logo"  />
                    </div>
                    <ul className={`${styles.nav_links} hidden md:flex space-x text-lg font-bold`}>
                        <li><a href="#about" >About Us</a></li>
                        <li><a href="#services" >Services</a></li>
                        <li><a href="#tutors" >Tutors</a></li>
                        <li><a href="#testimonials" >Testimonials</a></li>
                        <li><a href="#blogs" >Blogs</a></li>
                    </ul>
                    <div className="flex space-x-4">
                        <a className={`${styles.nav_login} hidden md:block bg-transparent  text-blue-600 py-2 px-4 rounded-lg  transition`}>
                        Log In
                        </a>
                        <a className={`${styles.nav_signup} hidden md:block bg-transparent   py-2 px-4 rounded-lg  transition`}>
                        Sign Up
                        </a>
                    </div>
                    </nav>
        </>
    );
}

export default NavBar;

