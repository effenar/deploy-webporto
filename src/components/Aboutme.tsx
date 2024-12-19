import React from "react";


const  Aboutme = () => {
    return (
        <div id="aboutme" className="bg-[fna-wall.png] pt-32 pb-28 hero bg-base-200 h-auto md:h-auto md:pt-32 md:pb-32" style={{
            backgroundImage: "url(https://i.ibb.co.com/RTPDywY/fna-wall.png)",
          }}>

            <div className="hero-content text-center text-white">

                <div className="max-w-screen-lg space-y-10 justify-items-center md:pt-10 md:pb-20">
                    <div className="flex gap-5">
                        <img
                            src="Aboutme.png"
                            className="w-96 h-auto" />
                    </div>
                    <div className="space-y-4 text-base">
                        <p>With over 8 years of experience as an Administration Staff and Customer Service professional, I've honed my problem-solving skills, attention to detail, and strong work ethic. Now, I'm channeling my passion for learning into the world of Fullstack Web Development.</p>
                        <p>While my background isn't in IT, my career has taught me the value of persistence, adaptability, and delivering results. These qualities drive me as I dive into web development, and I'm excited to apply my experience and dedication to building meaningful, user-friendly applications.</p>
                        <p>I'm a fast learner, passionate about technology, and committed to continuous improvement. I'm ready to take on new challenges, grow as a developer, and contribute to projects that make an impact.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;