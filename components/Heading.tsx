"use client";

import { motion } from "framer-motion";
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { FaCodeCommit } from "react-icons/fa6";

interface HeadingProps {
    title: string;
}


const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div className="overflow-hidden">
        <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className='flex flex-col justify-center items-center text-accent hover:text-shad uppercase'>
            <div className='flex gap-2 '>
                <FaCode className='text-4xl font-thin'></FaCode>
                <p>_____________________________________</p>
            </div>
            <div><p className='text-8xl font-semibold text-light'>{title}</p></div>
            <div className='flex gap-2'>
                <p>---------------------------------<FaCodeCommit className='inline-block'></FaCodeCommit>---------------------------------<FaCodeCommit className='inline-block'></FaCodeCommit>---------------------------------</p>
            </div>
        </motion.div>
        </div>
    )
}

export default Heading