import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";

const  Hero = () => {
    return (
        <div id="Hero" className="hero bg-base-100 md:min-h-screen pb-20 scroll-smooth">
            <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                <img
                    src="logo-fna.png"
                    className="w-auto h-auto" />
                <div className="space-y-12">
                    <div>
                        <h1 className="text-6xl font-bold">Hi!</h1>
                        <h1 className="text-6xl font-bold">I'm Fuat Nur Afrillah</h1>
                        <p className="py-6">
                            A Fullstack Web Developer (Under Development) who believes coding should be as fun as it is functional.
                            From solving problems to creating beautiful web applications, I'm here to make your ideas come to life—while keeping things light and enjoyable. 
                            <br />Let's create something amazing (and fun) together!"
                        </p>
                        <img src="ttd-fna.png" alt="" className="h-28"/>
                    </div>
                    <ul className="flex gap-2">
                        <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://discordapp.com/users/Faprillah#2165">
                            <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />
                        </a>
                        <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://x.com/Furillah">
                            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                        </a>
                        <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://www.instagram.com/fn.april/">
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                        </a>
                        <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://github.com/effenar">
                            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                        </a>
                        <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://www.linkedin.com/in/fuat-nur-afrillah/">
                            <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero;