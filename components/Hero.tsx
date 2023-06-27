"use client";
import { motion } from 'framer-motion';
import React from 'react';
import ButtonLink from './ButtonLink';
import Link from 'next/link';

const Hero = () => {
    return (
        <section>
            {/* Architecting the Web: Full Stack Mastery in Action */}
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
                    <div className="overflow-hidden text-[10rem] font-normal text-dark">
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

                {/* DESCRIPTIONS */}
                <div className="mt-5 uppercase flex gap-10 overflow-hidden text-center bg-red-100/50">
                    <motion.p
                        initial={{ y: "-100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 2.1 }}
                        className="w-[25rem]"
                    >
                        Passionate Full-Stack Developer crafting cutting-edge web apps.
                        Thrives in teams, problem-solver. Delivers solutions with coding
                        passion.
                    </motion.p>
                    <motion.p
                        initial={{ y: "-100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 2.3 }}
                    >
                        Sumona Shimu <br />{" "}
                        <ButtonLink
                            href="mailto:shohan.sub.56@gmail.com"
                            target="_blank"
                            placeholder="shohan.sub.56@gmail.com"
                        />
                    </motion.p>
                </div>

                <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 1.5, delay: 1.9 }}
                    className="mt-5 border-light/30"
                />

                {/* SKILL CARDS Right*/}
                <div className="absolute right-0 top-0 w-[40rem] h-[30rem] z-[1]">
                    <motion.div
                        initial={{ opacity: 0, left: "25%" }}
                        whileInView={{ opacity: 1, left: "75%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[35%] top-[35%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-yellow-400"
                    >
                        <span>
                            icon1
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, top: "90%" }}
                        whileInView={{ opacity: 1, top: "80%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
                        className="w-[15rem] h-[15rem] rounded-full border border-light/10 absolute left-[65%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-lime-400"
                    >
                        <span>
                            icon3
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, left: "95%" }}
                        whileInView={{ opacity: 1, left: "85%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-violet-400"
                    >
                        <span>
                            icon4
                        </span>
                    </motion.div>

                    
                </div>
                {/* SKILL CARDS Left*/}
                <div className="absolute left-0 top-20 w-[30rem] h-[40rem] z-[1]">
                <motion.div
                        initial={{ opacity: 0, left: "25%" }}
                        whileInView={{ opacity: 1, left: "55%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[35%] top-[40%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-yellow-400"
                    >
                        <span>
                            icon1
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, top: "90%" }}
                        whileInView={{ opacity: 1, top: "80%" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
                        className="w-[10rem] h-[10rem] rounded-full border border-light/10 absolute left-[55%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-lime-400"
                    >
                        <span>
                            icon3
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, left: "95%" }}
                        whileInView={{ opacity: 1, left: "30%" }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.5 }}
                        className="w-[15rem] h-[15rem] rounded-full border border-light/10 absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-violet-400"
                    >
                        <span>
                            icon4
                        </span>
                    </motion.div>

                    
                </div>

            </section>
        </section>
    );
};

export default Hero;