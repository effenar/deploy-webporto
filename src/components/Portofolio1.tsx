import React from "react";

const  Porto1 = () => {
    return (
        <div className="hero bg-base-200 min-h-96 pt-20 pb-20">
            <div className="hero-content flex-col lg:gap-16 lg:flex-row">
                <img
                    src="https://i.ibb.co.com/Rz1FBgs/antimager.png"
                    className=" max-w-xs md:max-w-sm" />
                <div className="space-y-6 pt-10 md:pt-0">
                    <div className="space-y-8">
                        <div className="flex gap-2">
                            <div className="badge badge-warning">Typescript</div>
                            <div className="badge badge-warning">Next.js</div>
                            <div className="badge badge-warning">React</div>
                            <div className="badge badge-warning">Tailwind CSS</div>
                        </div>

                        <div>
                            <div className="flex-col space-y-2 md:flex md:flex-row md:items-baseline gap-3">
                                <h1 className="text-5xl font-semibold">AntiMager</h1>
                                <p className="text-2xl font-semibold">Your Path to Productivity</p> 
                            </div>                     
                            <p className="py-6">
                                Introducing <b>AntiMager</b>, the app designed specifically for all the <i>"Magerians"</i>  out there! 
                                <br />
                                In Bahasa, <b>"Mager"</b>  is a term we all know too well—it means being a <b>"Couch Potato"</b>  or feeling stuck in the comfort zone. But what if we could change that? 
                                <br />
                                <br />
                                <b>AntiMager</b> is here to inspire and empower you to become a go-getter! 
                                <br />This app is your ultimate companion in breaking free from inactivity and transforming your daily routine. Whether you're struggling to get started, need a boost of motivation, or just want to organize your day more effectively, <b>AntiMager</b> is here to help you make your goals a reality.
                                <br />
                                <br />
                                With <b>AntiMager</b>, it's time to swap the couch for action and start achieving! 
                                <br />
                                Take charge of your day, embrace your inner go-getter, and make your dreams a reality—one step at a time.
                            </p>  
                        </div>
                      
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="https://antimager.vercel.app/" target="_blank">
                            <button className="btn btn-active btn-neutral rounded-full hover:bg-slate-100 hover:text-black">Try the App</button>
                        </a>
                        <a href="https://github.com/effenar/deploy-todo" target="_blank">
                            <button className="btn btn-active btn-neutral rounded-full hover:bg-slate-100 hover:text-black">GitHub Repository</button>        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porto1;