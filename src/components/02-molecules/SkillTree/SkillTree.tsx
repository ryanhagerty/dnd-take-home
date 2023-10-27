import "./SkillTree.css";
import { useState, useRef } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Skill from "../../01-atoms/Skill/Skill";

declare type SkillTreeProps = {
  title: string;
  parentTree: number;
  skills: {
    altText: string;
    dataId: string;
  }[];
};

const SkillTree: React.FC<SkillTreeProps> = ({ title, parentTree, skills }) => {
  // TODO: DND-001 - Refactor tree sorter so that any number of talent
  // paths can be added without the need for additional code.
  const selectedItemsTree1 = useState<boolean[]>(Array(4).fill(false))[0];
  const selectedItemsTree2 = useState<boolean[]>(Array(4).fill(false))[0];
  const mostRecentIndexRef1 = useRef<number | null>(null);
  const mostRecentIndexRef2 = useRef<number | null>(null);

  const selectedItems =
    parentTree === 0 ? selectedItemsTree1 : selectedItemsTree2;
  const selectedRef = 
  parentTree === 0 ? mostRecentIndexRef1 : mostRecentIndexRef2;
  

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
            selectedItems={selectedItems}
            mostRecentIndex={selectedRef}
          />
        );
      })}
    </div>
  );
};

export default SkillTree;
