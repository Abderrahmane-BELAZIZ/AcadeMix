import styles from "./Welcome.module.scss"
import school from "../../../assets/School.png"
function Welcome() {
    return (
        < >
        <div className={`${styles.container} flex h-screen`}>
      <div className={` ${styles.div} w-1/2 flex flex-col justify-center items-center p-8`}>
        <header className={styles.Header}>The Future of Education</header>
        <a href="#" className={styles.Link}>Find Tutor</a>
      </div>
      <div className="w-1/2 flex justify-center items-start pt-20"> {/* Added pt-20 for top padding */}
        <img className={styles.img} src={school} alt="School" />
      </div>
    </div>

        </>
    );
}

export default Welcome;
