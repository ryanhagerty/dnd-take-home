import "./SkillTree.css";
import { useState, useRef } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Skill from "../../01-atoms/Skill/Skill";
import jsonData from "../../../_data.json";

declare type SkillTreeProps = {
  title: string;
  skills: {
    altText: string;
    dataId: string;
  }[];
};

const SkillTree: React.FC<SkillTreeProps> = ({ title, skills }) => {
  const skillLength = jsonData?.[0]?.skills?.length;
  const selectedItemsTree = useState<boolean[]>(
    Array(skillLength).fill(false),
  )[0];
  const mostRecentIndexRef = useRef<number | null>(null);

  return (
    <div className="skill-tree" test-id="skill-tree">
      <Heading level="2" className="heading heading--sm skill-tree__heading">
        {title}
      </Heading>
      {skills.map((skill, index) => {
        return (
          <Skill
            key={`${skill.altText}-${index}`}
            altText={skill.altText}
            dataId={skill.dataId}
            index={index}
            selectedItems={selectedItemsTree}
            mostRecentIndex={mostRecentIndexRef}
          />
        );
      })}
    </div>
  );
};

export default SkillTree;
