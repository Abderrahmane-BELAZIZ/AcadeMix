import styles from './Services.module.scss'
function Services() {
    return (
        <div className={`${styles.container} relative w-full h-auto bg-[#FFFFFF] py-4`}>
            <header className={`${styles.title} text-center text-3xl font-bold   `}>
                <span className="bg-gradient-to-r from-[#2A4FF6] to-[#A020F0] bg-clip-text text-transparent"> Services </span>
            </header>
            <p className="text-center text-[80px] leading-[120px] font-bold text-black mb-4">
                Explore Our Services
            </p>
        </div>
    );
}

export default Services;
