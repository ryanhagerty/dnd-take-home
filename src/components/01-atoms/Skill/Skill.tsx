import "./Skill.css";
import { useState, MouseEvent, KeyboardEvent, MutableRefObject } from "react";
import spriteImg from "../../../assets/img/talent-icons-sprite.png";
import { counter, increment, decrement } from "../../../utils/counter";
import config from "../../../_config.json";

declare type SkillProps = {
  altText: string;
  dataId: string;
  index: number;
  selectedItems: Array<boolean>;
  mostRecentIndex: MutableRefObject<number | null>;
};

const Skill: React.FC<SkillProps> = ({
  altText,
  dataId,
  index,
  selectedItems,
  mostRecentIndex,
}) => {
  const [activeClass, setActiveClass] = useState(false);
  const count = counter.use();

  const removeSkillPoint = () => {
    if (activeClass && index === mostRecentIndex.current) {
      decrement(1);
      setActiveClass(!activeClass);
      selectedItems[index] = false;
      mostRecentIndex.current = index - 1;
    }
  };

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    removeSkillPoint();
  };

  /* Because right click is not accessible for keyboard
   * users, we allow for 'shift + enter' to remove
   * skill points.
   * This will be excluded from test coverage.
   */
  const handleAccessibleKeys = (e: KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
      removeSkillPoint();
    }
  };

  const determineDisabled = () => {
    if (index === 0 || selectedItems[index - 1]) {
      return true;
    }
  };

  const handleClick = () => {
    if (count < config.maxSkillPoints && !activeClass && determineDisabled()) {
      increment(1);
      setActiveClass(!activeClass);
      selectedItems[index] = true;
      mostRecentIndex.current = index;
    }
  };

  return (
    <div className="skill">
      <button
        className={`skill__btn ${activeClass ? "skill__btn--active" : ""}`}
        onClick={handleClick}
        onContextMenu={handleRightClick}
        onKeyUp={handleAccessibleKeys}
        data-testid="skill__btn"
      >
        <img
          className="skill__img"
          src={spriteImg}
          alt={altText}
          data-id={dataId}
        />
      </button>
      <span className="skill__connect"></span>
    </div>
  );
};

export default Skill;