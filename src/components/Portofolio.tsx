import React from "react";

const  Porto = () => {
    return (
        <div id="portofolio" className="bg-[fna-wall.png] hero bg-black h-auto pt-32 pb-28 md:h-auto md:pt-32 md:pb-32">

            <div className="hero-content text-center text-white">

                <div className="max-w-screen-lg space-y-10 justify-items-center md:pt-10 md:pb-10">
                    <div className="flex gap-5">
                        <img
                            src="Portofolio.png"
                            className=" h-auto md:h-52" />
                    </div>
                    <div className="space-y-4 text-base">
                        <p>Explore a selection of my recent projects, where design meets functionality. Each project reflects my dedication to creating seamless, responsive, and user-centered web experiences. From complex layouts to clean code, these pieces highlight my skills in both design and development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porto;