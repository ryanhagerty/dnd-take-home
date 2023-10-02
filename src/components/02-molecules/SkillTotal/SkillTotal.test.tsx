import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import config from "../../../_config.json";
import SkillTotal from "./SkillTotal";
import Skill from "../../01-atoms/Skill/Skill";

describe("SkillTotal component", () => {
  it("renders max skill points from config", () => {
    render(
      <SkillTotal totalSkill={config.maxSkillPoints} title="Points spent" />
    );
    expect(screen.getByText('6'));
  });

  it("used skill points text updates after skill click", () => {
    render(
      <SkillTotal totalSkill={config.maxSkillPoints} title="Points spent" />
    );
    const { getByTestId } = render(
      <Skill
        altText="alt text"
        dataId="crown"
        index={0}
        selectedItems={[]}
        mostRecentIndex={{ current: 0 }}
      />
    );

    const element = getByTestId("skill__btn");
    fireEvent.click(element);

    expect(screen.getByText("1 /"));
  });
});
