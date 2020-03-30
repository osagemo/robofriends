import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("expect to render Card component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
