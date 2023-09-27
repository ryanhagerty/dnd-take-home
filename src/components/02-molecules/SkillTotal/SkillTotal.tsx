import "./SkillTotal.css";
import Heading from "../../01-atoms/Heading/Heading";
import { counter } from "../../../utils/counter";

declare type SkillTotalProps = {
  totalSkill: number;
  title: string;
};

const SkillTotal: React.FC<SkillTotalProps> = ({ totalSkill, title }) => {
  const count = counter.use();

  return (
    <div className="skill-total">
      <div className="skill-total__calc">
        <span className="skill-total__number">{count} / </span>
        <span className="skill-total__number">{totalSkill}</span>
      </div>
      <Heading level="3" className="heading heading--md skill-total__heading">
        {title}
      </Heading>
    </div>
  );
};

export default SkillTotal;
