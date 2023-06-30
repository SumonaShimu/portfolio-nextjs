"use client";
import { motion } from 'framer-motion';
import React from 'react';
import ButtonLink from './ButtonLink';
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import Link from 'next/link';

const Hero = () => {
    return (
        <section className='h-[100vh]'>
            <section className="wrapper section-padding mt-5 h-[calc(100vh-6rem)] relative">
                {/* HEADLINES */}
                <div className="text-[6rem] leading-[1] uppercase font-semibold text-center">
                    {/* FIRST LINE */}
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                        >
                            Full Stack
                        </motion.h2>
                    </div>
                    {/* SECOND LINE */}
                    <div className="overflow-hidden text-[10rem] font-normal">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                        > Ma
                            <span className='text-error'>s</span>
                            tery
                        </motion.h2>
                    </div>
                    {/* THIRD LINE */}
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
                        >
                            At your service
                        </motion.h2>
                    </div>
                </div>

                {/* description */}
                <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
                        className='w-[50%] mx-auto'>
                    <motion.hr
                        initial={{ width: 0, x: "0%" }}
                        whileInView={{ width: "100%", x: "18%" }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 1 }}
                        className="mt-5 border-light/20"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.9 }}
                        className='pt-2 text-justify text-sm'>Sumona Akter Shimu | An enthusiastic and ambitious Full-stack Developer with a strong passion for creating innovative solutions | Specializing in the MERN stack | Honed skills to develop robust and dynamic web applications | With a keen eye for detail and a problem-solving mindset | Thrive in the world of competitive programming | Constantly pushing limits to excel
                    </motion.p>

                    <div className='mt-3 w-full mx-auto text-center flex justify-center'>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#" className="linear-flow">
                                Download Resume
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-error text-error rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#" className="linear-flow">
                                Visit Linkedin
                            </Link>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <Link href="#" className="linear-flow">
                            Visit Github
                            </Link>
                        </li>
                    </div>

                    <motion.hr
                        initial={{ width: 0, x: "0%" }}
                        whileInView={{ width: "100%", x: "-10%" }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.2 }}
                        className="mt-1 border-light/20"
                    />
                </motion.div>

                {/* SKILL CARDS Right*/}
                <div className="absolute right-0 top-0 w-[40rem] h-[30rem] z-[1]">
                    <motion.div
                        initial={{ opacity: 0, left: "25%" }}
                        whileInView={{ opacity: 1, left: "75%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[35%] top-[35%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-yellow-400"
                    >
                        <span>
                            <TbBrandReact />
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, top: "90%" }}
                        whileInView={{ opacity: 1, top: "80%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
                        className="w-[15rem] h-[15rem] rounded-full border border-light/10 absolute left-[65%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-9xl flex justify-center items-center text-lime-600"
                    >
                        <span>
                            <TbBrandMongodb />
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, left: "95%" }}
                        whileInView={{ opacity: 1, left: "85%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-violet-600"
                    >
                        <span>
                            <TbBrandNextjs />
                        </span>
                    </motion.div>


                </div>
                {/* SKILL CARDS Left*/}
                <div className="absolute left-0 top-20 w-[30rem] h-[40rem] z-[1]">
                    <motion.div
                        initial={{ opacity: 0, left: "25%" }}
                        whileInView={{ opacity: 1, left: "55%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[35%] top-[40%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-blue-500"
                    >
                        <span>
                            <SiExpress/>
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, top: "90%" }}
                        whileInView={{ opacity: 1, top: "80%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[55%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-yellow-500"
                    >
                        <span>
                        <TbBrandJavascript />
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, left: "95%" }}
                        whileInView={{ opacity: 1, left: "30%" }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
                        className="w-[15rem] h-[15rem] rounded-full border border-light/10 absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-[10rem] flex justify-center items-center text-green-600"
                    >
                        <span>
                            <DiNodejs/>
                        </span>
                    </motion.div>


                </div>

            </section>
        </section>
    );
};

export default Hero;