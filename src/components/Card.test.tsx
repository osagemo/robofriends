import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render Card component", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
