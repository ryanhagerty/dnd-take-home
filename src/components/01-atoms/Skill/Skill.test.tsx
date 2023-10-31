import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Skill from "./Skill";

describe("Skill component", () => {
  const initialState = {
    skillPointer: {
      skillPoints: 0,
      maxSkillPoints: 6,
    },
  };

  const mockStore = configureStore();
  let store;

  it("renders and has alt text", () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Skill
          altText="alt text"
          dataId="crown"
          index={0}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    expect(screen.getByAltText("alt text"));
  });

  it("gets the active class on click", () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Skill
          altText="alt text"
          dataId="crown"
          index={0}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    const element = getByTestId("skill__btn");
    fireEvent.click(element);
    expect(element?.classList.contains("skill__btn--active")).toBe(true);
  });

  it("removes active class on right click", () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Skill
          altText="alt text"
          dataId="crown"
          index={0}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    const element = getByTestId("skill__btn");
    fireEvent.click(element);
    fireEvent.contextMenu(element);
    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });

  it("removes active class on shift click", async () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Skill
          altText="alt text"
          dataId="crown"
          index={0}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    const user = userEvent.setup();
    const element = getByTestId("skill__btn");
    await user.keyboard("{Tab}{Enter}");
    await user.keyboard("{Shift>}{Enter/}");

    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });

  it("does not allow itself to be clicked", () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Skill
          altText="alt text"
          dataId="crown"
          index={5}
          selectedItems={[]}
          mostRecentIndex={{ current: 0 }}
        />
      </Provider>
    );

    const element = getByTestId("skill__btn");
    fireEvent.click(element);
    expect(element?.classList.contains("skill__btn--active")).toBe(false);
  });
});
