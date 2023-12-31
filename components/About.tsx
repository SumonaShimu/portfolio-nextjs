"use client";
import React from 'react';
import ButtonLink from './ButtonLink';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { data } from '@/data/stats';
import CountUp from 'react-countup';
import Heading from './Heading';
import Link from 'next/link';
const About = () => {
    return (
        <section id="about" className="wrapper section-padding w-screen min-h-[100vh]">
            <Heading title='About' />
            {/* ABOUT */}
            <div className="mt-20 grid lg:grid-cols-3 gap-10 px-10">

                {/* CONTENTS */}
                <div className="wrap lg:col-span-2 text-xl overflow-hidden">
                    <motion.p
                        initial={{ y: "-100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
                        className='text-justify text-lg lg:text-2xl'
                    >
                        I am Sumona Akter Shimu, a Full-stack Developer with a background in competitive programming and a strong affinity for JavaScript.  My expertise lies in the dynamic MERN stack, where I excel at crafting powerful web applications. Currently, I am excitedly exploring the world of Next.js, further expanding my skillset. My portfolio showcases my expertise in building innovative and user-friendly applications. Let`s collaborate to create remarkable web solutions that make a lasting impact!
                    </motion.p>
                    {/* STATS */}
                    <div className='mt-3 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5'>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                          
                                <CountUp
                                    enableScrollSpy
                                    end={data.repos}
                                    className="text-6xl font-semibold text-accent"
                                />
                                <ButtonLink
                                    href="https://github.com/SumonaShimu"
                                    target="_blank"
                                    placeholder="Repositories"
                                />
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <CountUp
                                enableScrollSpy
                                end={data.contributions}
                                duration={2}
                                className="text-6xl font-semibold text-accent"
                            />
                            <div className="text-2xl">
                                <ButtonLink
                                    href="https://github.com/SumonaShimu"
                                    target="_blank"
                                    placeholder="Contributions"
                                />
                            </div>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <CountUp
                                enableScrollSpy
                                end={data.problems}
                                className="text-6xl font-semibold text-accent"
                            />
                            <div className="text-2xl">
                                <ButtonLink
                                    href="https://codeforces.com/profile/sumona32"
                                    target="_blank"
                                    placeholder="Problems Solved"
                                />
                            </div>
                        </li>
                        <li className="list-none px-2  py-2 hover:border border-light rounded-full  hover:backdrop-blur-xl hover:px-10 duration-500 hover:shadow-xl">
                            <CountUp
                                enableScrollSpy
                                end={data.projects}
                                className="text-6xl font-semibold text-accent"
                            />
                            <div className="text-2xl">
                                <ButtonLink
                                    href="https://github.com/SumonaShimu"
                                    target="_blank"
                                    placeholder="Projects Built"
                                />
                            </div>
                        </li>
                    </div>

                </div>
                {/* BEHIND IMAGE */}
                <motion.div
                    initial={{ scale: 0, borderRadius: "100px" }}
                    whileInView={{ scale: 1, borderRadius: "1rem" }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className="w-full h-[35rem] bg-black/40 border border-light/10 rounded-2xl shadow-xl"
                >
                    {/* IMAGE */}
                    <motion.div
                        initial={{ scale: 0, borderRadius: "100px" }}
                        whileInView={{ scale: 1, borderRadius: "1rem" }}
                        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                        className="w-full h-[35rem] overflow-hidden rounded-2xl group relative shadow-xl"
                    >
                        {/* OVERLAY */}
                        <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 w-full h-full group-hover:opacity-0 duration-[4000ms]"></div>
                        <Image
                            src="https://raw.githubusercontent.com/SumonaShimu/images/main/img/sumonashimu/sumona.jpg"
                            alt="Sumona Shimu"
                            width={500}
                            height={500}
                            priority
                            className="w-full h-full object-cover group-hover:scale-125 duration-[4000ms]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>

    );
};

export default About;