"use client";
import { motion } from "framer-motion";

import { data } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

interface ProjectsProps {
  showAll?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showAll }) => {
  let i=0;
  return (
    <section className="wrapper section-padding" id="projects">
      <Heading title="Projects" />

      <div className="h-[100vh] cards-wrapper mt-20 grid md:grid-cols-3 grid-rows-3 gap-10 overflow-hidden">
        {/* project 0 */}
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="row-span-2 relative" >
          <Image
            src={data[i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
        {/* project 1 */ }
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="relative" >
          <Image
            src={data[++i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
        {/* project 2 */}
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="row-span-2 relative" >
          <Image
            src={data[++i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
        {/* project 3 */}
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="row-span-2 relative" >
          <Image
            src={data[++i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
        {/* project 4 */}
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="relative" >
          <Image
            src={data[++i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
        {/* project 5 */}
        <motion.div 
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="relative" >
          <Image
            src={data[++i].image}
            alt={data[i].title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover object-top group-hover:scale-125 duration-[4000ms]"
          />
          {/* features visible on hover */}
          <div className="text-light bg-dark/80 absolute top-0 left-0 h-full w-full p-10 opacity-0 hover:opacity-100 duration-500">
            <div className="border border-light w-full h-full p-5 bg-dark/80  overflow-y-scroll overflow-x-hidden">
              <ProjectCard
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                image={data[i].image}
                description={data[i].description}
                tech={data[i].tech}
                live={data[i].liveLink}
                front={data[i].frontend}
                back={data[i].backend}
                full={data[i].fullstack}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-2xl flex justify-center">
        <ButtonLink href="/projects" placeholder="View All Projects" />
      </div>

    </section>
  );
};

export default Projects;
