import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SkillTree from "./SkillTree";

describe("SkillTree component", () => {
  const initialState = {
    skillPointer: {
      skillPoints: 0,
      maxSkillPoints: 6,
    },
  };

  const mockStore = configureStore();
  let store;

  it("renders the SkillTree and heading text", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SkillTree parentTree={0} title="Talent Path 1" skills={[]} />
      </Provider>,
    );

    expect(screen.getByText("Talent Path 1"));
  });

  it("renders the Skill children", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
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
      </Provider>,
    );

    expect(screen.getByAltText("alt text"));
  });
});
