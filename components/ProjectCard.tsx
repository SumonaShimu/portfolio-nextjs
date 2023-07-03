"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string;
  live: string;
  front: string;
  back: string;
  full: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  description,
  tech,
  live,
  front,
  back,
  full,
}) => {
  return (
    
      <div className="text-justify flex flex-col items-center gap-5 md:gap-10">
        {/* TITLE */}
        <div className="relative inline-block">
          <Link href={`/projects/${id}`} className="inline-block">
            <h3 className="text-3xl font-semibold">{title}</h3>
          </Link>
          {/* SHUTTER ONE */}
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
            className="shutter absolute w-0 h-full bg-accent z-[1] left-0 top-0 pointer-events-none"
          ></motion.div>
          {/* SHUTTER TWO */}
          <motion.div
            initial={{ width: "100%" }}
            whileInView={{ width: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
            className="shutter absolute w-0 h-full bg-dark z-[2] left-0 top-0 pointer-events-none"
          ></motion.div>
        </div>
        {/* TECH */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
            className="text-error"
          >
            {tech}
          </motion.p>
        </div>
        {/*  DESCRIPTION */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
            className="text-light/60 text-sm"
          >
            {description}
          </motion.p>
        </div>
        {/*  LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
          className="flex gap-5"
        >
          <ButtonLink href={live} placeholder="Live" target="_blank" />
          {front && (
            <ButtonLink href={front} placeholder="Frontend" target="_blank" />
          )}
          {back && (
            <ButtonLink href={back} placeholder="Backend" target="_blank" />
          )}
          {full && (
            <ButtonLink href={full} placeholder="Fullstack" target="_blank" />
          )}
          {/* <ButtonLink href={`/projects/${id}`} placeholder="View Details" /> */}
        </motion.div>
      </div>

  );
};

export default ProjectCard;
