import React from "react";
import { mount } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

const MockComponent = () => null;

it("displays an error message when wrapped component throws", () => {
  const wrapper = mount(
    <ErrorBoundary>
      <MockComponent />
    </ErrorBoundary>
  );
  expect(wrapper.state().hasError).toEqual(false);
  const error = new Error("Error while testing");
  wrapper.find(MockComponent).simulateError(error);
  expect(wrapper.state().hasError).toEqual(true);
  expect(wrapper.instance().render()).toEqual(
    <h1>Oops, something went wrong</h1>
  );
});
