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
      className="wrapper section-padding lg:py-5 bg-gradient-to-b from-dark to-accent/90 text-light w-full"
    >
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-start px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
          >
            &copy; CopyRight {new Date().getFullYear()} - Sumona Shimu
          </motion.p>
        </div>
        
        {/* socials */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2, delay: 0.5 }}
          >
            <div className="mt-3 flex gap-5">
              <Link
                href="https://github.com/SumonaShimu"
                target="_blank"
                className="text-3xl hover:text-error duration-500"
              >
                <span>
                  <AiFillGithub />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sumonashimu"
                target="_blank"
                className="text-3xl hover:text-error duration-500"
              >
                <span>
                  <BiLogoLinkedin />
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                className="text-3xl hover:text-error duration-500"
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
