import React from "react";


const  Skills = () => {
    return (
        <div id="skills" className="hero bg-base-100 h-auto pt-32 pb-28 md:pt-32 md:pb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className="space-y-10 justify-items-center">
                    <div className="flex gap-5">
                    <img
                            src="Myskills.png"
                            className="w-96 h-auto" />
                    </div>
                    <p className="py-6 text-center">
                    As I transition into the world of Fullstack Web Development, Im building a strong foundation of technical skills that enable me to bring ideas to life. While my background isn't from IT, my journey has been fueled by a passion for learning, problem-solving, and continuous growth. Below, you'll find a snapshot of the technologies I'm working with, and the tools I'm mastering to create impactful, user-friendly web applications.
                    </p>
                    <div className="flex flex-col items-center justify-items-center md:flex-row gap-10">
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Front-End
                                    <div className="badge badge-secondary">Beginner</div>
                                </h2>
                                <p>I's stilll on my journey learning this skill</p>
                                <br />
                                <div className="card-actions justify-end">
                                    <div className="badge badge-neutral">Typescript</div>
                                    <div className="badge badge-neutral">Tailwind CSS</div>
                                    <div className="badge badge-neutral">React</div>
                                    <div className="badge badge-neutral">Next.js</div>
                                    <div className="badge badge-neutral">DaisyUI</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Back-End
                                    <div className="badge badge-secondary">Beginner</div>
                                </h2>
                                <p>I's stilll on my journey learning this skill</p>
                                <br />
                                <div className="card-actions justify-end">
                                    <div className="badge badge-neutral">Typescript</div>
                                    <div className="badge badge-neutral">Javascript</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Other Skills
                                    <div className="badge badge-primary">Intermediate</div>
                                </h2>
                                <p>I's stilll on my journey learning this skill</p>
                                <br />
                                <div className="card-actions justify-end">
                                    <div className="badge badge-neutral">Adobe Photoshop</div>
                                    <div className="badge badge-neutral">Clip Studio</div>
                                    <div className="badge badge-neutral">Adobe Illustrator</div>
                                    <div className="badge badge-neutral">CapCut</div>
                                    <div className="badge badge-neutral">OBS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;