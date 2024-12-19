import React from "react";

const  Porto2 = () => {
    return (
        <div className="hero bg-base-200 min-h-96 pt-0 pb-20">
            <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/vHkygLn/gojekdup.png"
                    className=" max-w-xs md:max-w-3xl md:-mt-52" />
                <div className="space-y-6 pt-10 md:pt-0 md:justify-items-end">
                    <div className="space-y-8">
                        <div className="flex gap-2">
                            <div className="badge badge-warning">Typescript</div>
                            <div className="badge badge-warning">Next.js</div>
                            <div className="badge badge-warning">React</div>
                            <div className="badge badge-warning">Tailwind CSS</div>
                        </div>
                        <div className="flex-col space-y-2 md:flex md:flex-row md:items-baseline gap-3">
                            <h1 className="text-5xl font-semibold">Gojek-Dup</h1>
                            <p className="text-2xl font-semibold">Website Cloning</p> 
                        </div>                     
                        <p className="py-8 text-right">
                            <b>Overview :</b><br />
                            For this project, I was tasked with creating a duplicate of the Gojek website as part of a hands-on exercise to refine my web development and design slicing skills. The goal was to replicate the look and feel of the website as closely as possible while focusing on accurate design implementation and responsive layouts. 
                            <br />
                            <br />
                            <b>Objective :</b><br /> 
                            The main objective was to practice translating a high-fidelity design into clean, functional code, ensuring that the final product mirrors the original Gojek website’s aesthetics and user experience. This project allowed me to focus on key web development skills such as layout structuring, CSS styling, and ensuring consistency across multiple screen sizes. 
                            <br />
                            <br />
                            <b>Challenges & Learning :</b> <br />
                            One of the main challenges was replicating complex layouts and ensuring that the website’s performance was optimal across different devices. This project significantly enhanced my attention to detail and sharpened my skills in pixel-perfect design and responsive development.
                            <br />
                            <br />
                            <b>Outcome :</b><br />
                            The project resulted in a fully functional website clone that mirrors the original Gojek site in terms of design, interactivity, and layout. This exercise not only improved my technical skills but also my ability to quickly analyze and translate designs into real-world web applications.
                        </p>                        
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="https://gojekdupbyfna.vercel.app/" target="_blank">
                            <button className="btn btn-active btn-neutral rounded-full hover:bg-slate-100 hover:text-black">Visit the Project</button>
                        </a>
                        <a href="https://github.com/effenar/deploy-gojekdup" target="_blank">
                            <button className="btn btn-active btn-neutral rounded-full hover:bg-slate-100 hover:text-black">GitHub Repository</button>        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porto2;