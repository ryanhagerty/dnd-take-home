import "./SkillCalc.css";
import Heading from "../../01-atoms/Heading/Heading";
import SkillTree from "../../02-molecules/SkillTree/SkillTree";
import SkillTotal from "../../02-molecules/SkillTotal/SkillTotal";
import jsonData from "../../../_data.json";

const SkillCalc = () => {
  return (
    <section className="skill-calc">
      <Heading level="1" className="heading heading--lrg heading--bg">
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </Heading>
      <div className="skill-calc__tree">
        <div className="skill-calc__paths">
          {jsonData.map((item, index) => (
            <SkillTree
              key={`${item.title}-${index}`}
              parentTree={index}
              title={item.title}
              skills={item.skills}
            />
          ))}
        </div>
        <SkillTotal title="Points spent" />
      </div>
    </section>
  );
};

export default SkillCalc;
