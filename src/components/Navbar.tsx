import React from "react";

const  Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-5 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-8 w-52 p-2 shadow">
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portofolio">Portofolio</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                    <img src="logo-fna.png" alt="" width="100"/>
            </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portofolio">Portofolio</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="black"
                            viewBox="0 0 600 600"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                        </svg>
                        My CV
                    </button>
                </div>
        </div>
    )
}

export default Navbar;
