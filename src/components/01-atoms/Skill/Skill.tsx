import "./Skill.css";
import {
  useState,
  MouseEvent,
  KeyboardEvent,
  TouchEvent,
  MutableRefObject,
} from "react";
import spriteImg from "../../../assets/img/talent-icons-sprite.png";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COUNTER, MIN_COUNTER } from "../../../store/consts";
import { initialState, RootState } from "../../../store/initialState";

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
  const dispatch = useDispatch();
  const count = useSelector(
    (state: RootState) => state.skillPointer.skillPoints
  );
  const maxSkill = initialState.maxSkillPoints;

  const removeSkillPoint = () => {
    if (activeClass && index === mostRecentIndex.current) {
      dispatch({ type: MIN_COUNTER });
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

  /* One touch on mobile adds a skill point.
   * Two touches removes a skill point.
   * This is ignored from coverage due to React Testing
   * Library's user-event simulating touch with mouse
   * events. See: https://github.com/testing-library/user-event/issues/1095
   */
  /* c8 ignore next 5 */
  const handleMobileTouch = (e: TouchEvent) => {
    if (e.touches) {
      removeSkillPoint();
    }
  };

  const handleClick = () => {
    if (count < maxSkill && !activeClass && determineDisabled()) {
      dispatch({ type: ADD_COUNTER });
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
        onTouchStart={handleMobileTouch}
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
