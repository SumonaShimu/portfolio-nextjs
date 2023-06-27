"use client"; //client component as button will be used
import { motion } from "framer-motion"
import Link from "next/link";
import ButtonLink from "./ButtonLink";
const Navbar = () => {
    return (
        <motion.header
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="h-24 flex justify-between items-center uppercase border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100] text-light"
        >
            <div className="wrapper flex justify-between items-center">
                <div className="left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
                        className="logo flex items-center gap-2"
                    >
                        <span className="text-2xl text-accent animate-spin">
                            {/* icon */}
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
                    className="mid py-4 px-10 border border-light/10 rounded-tl-full rounded-br-full bg-dark backdrop-blur-xl hover:px-20 duration-500 shadow-xl"
                >
                    <nav className="flex gap-5">
                        <li className="list-none">
                            <Link href="#home" className="linear-flow">
                                Home
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="#about" className="linear-flow">
                                About
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="#projects" className="linear-flow">
                                Projects
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="#skills" className="linear-flow">
                                Skills
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link href="#contact" className="linear-flow">
                                Contact
                            </Link>
                        </li>
                    </nav>
                </motion.div>

                <div className="right">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.9 }}
                    >
                        <ButtonLink
                            href="#"
                            placeholder="Download Resume"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;