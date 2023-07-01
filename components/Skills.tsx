
import Heading from "./Heading";
import SkillBox from "./SkillBox";

import { data } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="wrapper">
        <Heading title="Skills" />
      </div>

      {/* SKILLS */}
      <div className="mt-20 wrapper flex gap-10 flex-wrap justify-center">
        {data.map((skill) => (
          <SkillBox key={skill.id} text={skill.text} delay={skill.delay}>
            {<skill.icon />}
          </SkillBox>
        ))}
      </div>

    </section>
  );
};

export default Skills;
