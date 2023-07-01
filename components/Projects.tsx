import { data } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";
import ButtonLink from "./ButtonLink";

interface ProjectsProps {
  showAll?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showAll }) => {
  return (
    <section className="wrapper section-padding" id="projects">
      <Heading title="Projects" />

      <div className="cards-wrapper mt-20 grid md:grid-cols-2 grid-cols-1 gap-10">
        {!showAll &&
          data
            .filter((_, i) => i <= 3)
            .map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                live={project.liveLink}
                front={project.frontend}
                back={project.backend}
                full={project.fullstack}
              />
            ))}

        {showAll &&
          data.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              live={project.liveLink}
              front={project.frontend}
              back={project.backend}
              full={project.fullstack}
            />
          ))}
      </div>

      {!showAll && (
        <div className="mt-20 text-2xl flex justify-center">
          <ButtonLink href="/projects" placeholder="View All Projects" />
        </div>
      )}
    </section>
  );
};

export default Projects;
