import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SkillCalc from "./SkillCalc";

describe("SkillCalc component", () => {
  const initialState = {
    skillPointer: {
      skillPoints: 0,
      maxSkillPoints: 6,
    },
  };

  const mockStore = configureStore();
  let store;

  it("renders SkillCalc component", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SkillCalc />
      </Provider>
    );
  });
});
