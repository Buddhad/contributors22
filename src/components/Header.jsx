import React, { useState, useEffect } from 'react';
import './Header.css'
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

    useEffect(() => {
        document.body.addEventListener("click", () => {
            setHamburger(false);
        });
    });
    return (
        <div className="navbar w-full h-16 flex items-center justify-between mb-2 px-5 text-neutral-content fixed text-xl">

            <div className="px-2 mx-2 flex items-center">
                <Link to="/">
                    <img src="/hackto.svg" alt="" width="40px" height="40px" />
                </Link>
                acktoberFest
            </div>
            <div className='flex items-center'>

                <div>
                    <div
                        className={hamburger ? "hidden" : "hamburger text-2xl"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setHamburger(true);
                        }}
                    >
                        <GiHamburgerMenu />
                    </div>
                    <div
                        className={hamburger ? "text-2xl close" : " hidden"}
                        onClick={(e) => {
                            e.stopPropagation();
                            setHamburger(false);
                        }}
                    >
                        <IoMdClose />
                    </div>
                </div>

                <div
                    className={
                        hamburger
                            ? "block absolute top-10 mt-6 pt-1 bg-white left-0 w-full dark:bg-black"
                            : "flex-none hidden px-2 mx-2 lg:flex responsive-nav"
                    }
                >
                    <div className={hamburger ? "flex flex-col" : "flex items-stretch"}>
                        <div className="my-2">
                        <a
                            exact
                            activeClassName="active_link"
                            href="/"
                            className="nav-links btn btn-sm rounded-btn dark:bg-black"
                        >
                            HOME
                        </a>
                        </div>
                        <div className="my-2">
                        <a
                            exact
                            activeClassName="active_link"
                            target="_blank"
                            href="https://hacktoberfest.com/"
                            className="nav-links btn btn-sm rounded-btn dark:bg-black"
                        >
                            OFFICIAL WEBSITE
                        </a>
                        </div>
                        <div className="my-2">
                        <a
                            exact
                            activeClassName="active_link"
                            target="_blank"
                            href="https://hacktoberfest.com/profile"
                            className="nav-links btn btn-sm rounded-btn dark:bg-black"
                        >
                            DASHBOARD
                        </a>
                        </div>
                        <div className="my-2">
                        <a className="nav-links btn btn-sm rounded-btn dark:bg-black">
                            <Link to="/about">ABOUT</Link>
                        </a>
                        </div>
                        <div className="my-2">
                        <a className="nav-links btn btn-sm rounded-btn dark:bg-black">
                            <Link to="/contact">CONTACT US</Link>
                        </a>
                        </div>
                        <a
                            className="px-4 py-1 btn btn-ghost btn-sm rounded-btn text-2xl self-center my-2"
                            href="https://github.com/Buddhad/contributors22"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header