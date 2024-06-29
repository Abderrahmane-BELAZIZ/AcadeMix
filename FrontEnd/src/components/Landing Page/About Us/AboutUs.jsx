import laptop from "../../../assets/laptop.png";

function AboutUs() {
    return (
        <div className="relative w-full h-auto bg-[#F2F5FF] py-12">
            {/* "About Us" header at the top center */}
            <header className="text-center text-3xl font-bold bg-gradient-to-r from-[#2A4FF6] to-[#A020F0] bg-clip-text text-transparent mb-8">
                About Us
            </header>

            {/* Big header centered below "About Us" */}
            <p className="text-center text-[80px] leading-[120px] font-bold text-black mb-8">
                World-Class Education
            </p>

            <div className="flex justify-between items-center mx-auto max-w-[1400px] px-4">
                {/* Paragraph on the left with more width */}
                <div className="w-[55%] pr-6">
                    <p className="text-[30px] leading-[45px] font-bold text-black">
                        At <span className="bg-gradient-to-r from-[#2A4FF6] to-[#A020F0] bg-clip-text text-transparent">AcadeMix</span>, we are dedicated to revolutionizing education through technology. Our platform provides students with everything they need to succeed, from engaging videos to personalized tutoring and career guidance. Join us and embark on a journey towards a brighter future of learning!
                    </p>
                </div>

                {/* Image on the right */}
                <div className="w-[45%] pl-6">
                    <img src={laptop} className="w-full h-auto max-w-[440px] mx-auto" alt="Laptop" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
