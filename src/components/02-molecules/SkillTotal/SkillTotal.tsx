import "./SkillTotal.css";
import { useSelector } from "react-redux";
import { initialState, RootState } from "../../../store/initialState";
import Heading from "../../01-atoms/Heading/Heading";

declare type SkillTotalProps = {
  title: string;
};

const SkillTotal: React.FC<SkillTotalProps> = ({ title }) => {
  const count = useSelector(
    (state: RootState) => state.skillPointer.skillPoints,
  );
  const maxSkill = initialState.maxSkillPoints;

  return (
    <div className="skill-total">
      <div className="skill-total__calc">
        <span className="skill-total__number">{count} / </span>
        <span className="skill-total__number">{maxSkill}</span>
      </div>
      <Heading level="3" className="heading heading--md skill-total__heading">
        {title}
      </Heading>
    </div>
  );
};

export default SkillTotal;
