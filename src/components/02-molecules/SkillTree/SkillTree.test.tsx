import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillTree from "./SkillTree";

describe("SkillTree component", () => {
  it("renders the SkillTree and heading text", () => {
    render(<SkillTree parentTree={0} title="Talent Path 1" skills={[]} />);

    expect(screen.getByText("Talent Path 1"));
  });

  it("renders the Skill children", () => {
    render(
      <SkillTree
        parentTree={0}
        title="Talent Path 1"
        skills={[
          {
            altText: "alt text",
            dataId: "layers",
          },
        ]}
      />
    );

    expect(screen.getByAltText("alt text"));
  });
});
