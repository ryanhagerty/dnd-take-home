import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SkillTotal from "./SkillTotal";
import Skill from "../../01-atoms/Skill/Skill";

describe("SkillTotal component", () => {
  const initialState = {
    skillPointer: {
      skillPoints: 1,
      maxSkillPoints: 6,
    },
  };

  const mockStore = configureStore();
  let store;

  it("renders max skill points from config", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SkillTotal title="Points spent" />
      </Provider>
    );
    expect(screen.getByText("6"));
  });

  it("used skill points text updates after skill click", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SkillTotal title="Points spent" />
        <Skill
          altText="alt text"
          dataId="crown"
          index={0}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    expect(screen.getByText("1 /"));
  });
});
