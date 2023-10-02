import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Skill from "./Skill";

describe("Skill component", () => {
  it("renders and has alt text", () => {
    render(
      <Skill
        altText="alt text"
        dataId="crown"
        index={0}
        selectedItems={[]}
        mostRecentIndex={{ current: 0 }}
      />
    );

    expect(screen.getByAltText("alt text"));
  });

  it("gets the active class on click", () => {
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
    expect(element?.classList.contains("skill__btn--active")).toBe(true);
  });

  it("removes active class on right click", () => {
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
    fireEvent.contextMenu(element);
    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });

  it("removes active class on shift click", async () => {
    const { getByTestId } = render(
      <Skill
        altText="alt text"
        dataId="crown"
        index={0}
        selectedItems={[]}
        mostRecentIndex={{ current: 0 }}
      />
    );

    const user = userEvent.setup();
    const element = getByTestId("skill__btn");
    await user.keyboard("{Tab}{Enter}");
    await user.keyboard("{Shift>}{Enter/}");

    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });

  it("does not allow itself to be clicked", () => {
    const { getByTestId } = render(
      <Skill
        altText="alt text"
        dataId="crown"
        index={5}
        selectedItems={[]}
        mostRecentIndex={{ current: 0 }}
      />
    );

    const element = getByTestId("skill__btn");
    fireEvent.click(element);
    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });
});
