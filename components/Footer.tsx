"use client";

import { FaStarOfLife } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.footer
      initial={{ borderRadius:'0' }}
      whileInView={{ borderRadius:'0' }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="wrapper section-padding bg-gradient-to-b from-dark to-accent text-light"
    >
      <div className="mt-10 grid xl:grid-cols-3 gap-10 justify-between items-start px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
          >
            &copy; {new Date().getFullYear()} Sumona Shimu
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          >
            All Rights Reserved
          </motion.p>
        </div>
        {/* socials */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2, delay: 0.9 }}
          >
            <p>Stay Connected with </p>
            <div className="mt-3 flex gap-5">
              <Link
                href="https://github.com/shohan-pherones"
                target="_blank"
                className="text-3xl hover:text-accent duration-500"
              >
                <span>
                  <AiFillGithub />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shohan-pherones"
                target="_blank"
                className="text-3xl hover:text-accent duration-500"
              >
                <span>
                  <BiLogoLinkedin />
                </span>
              </Link>
              <Link
                href="https://twitter.com/elysianshohan"
                target="_blank"
                className="text-3xl hover:text-accent duration-500"
              >
                <span>
                  <BsTwitter />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>


      </div>
    </motion.footer>
  );
};

export default Footer;
