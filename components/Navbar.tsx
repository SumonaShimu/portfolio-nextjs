"use client"; //client component as button will be used
import { motion } from "framer-motion"
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
const Navbar = () => {
    return (
        <motion.header
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="min-h-24 flex justify-between items-center uppercase border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100] text-light"
        >
            <div className="wrapper flex justify-between flex-wrap lg:flex-nowrap items-center">
                <div className="left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
                        className="logo flex items-center gap-2  animate-pulse" 
                    >
                        <span className="w-10 h-10 text-accent">
                            {/* icon */}
                            <Image
                                src='/logo.png'
                                alt='logo'
                                width="100"
                                height="100"
                                priority
                                className="w-full h-full object-cover"
                            />
                        </span>
                        <Link href="#" className="linear-flow">
                            Sumona Shimu
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
                    className="mid py-4 px-10 "
                >
                    <nav className="flex flex-wrap lg:flex-nowrap gap:2 lg:gap-5">
                        <li className="list-none px-2  py-2 hover:border border-light/10 rounded-full hover:bg-dark hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#home" className="linear-flow">
                                Home
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light/10 rounded-full hover:bg-dark hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#about" className="linear-flow">
                                About
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light/10 rounded-full hover:bg-dark hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#projects" className="linear-flow">
                                Projects
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light/10 rounded-full hover:bg-dark hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#skills" className="linear-flow">
                                Skills
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light/10 rounded-full hover:bg-dark hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#contact" className="linear-flow">
                                Contact
                            </Link>
                        </li>
                    </nav>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default Navbar;