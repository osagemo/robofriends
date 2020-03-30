import { shallow, mount } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("Renders CounterButton component", () => {
  const wrapper = mount(<CounterButton />);
  expect(wrapper).toMatchSnapshot();
});

it("Only updates when count of nextState is different", () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.setState({ count: 2 });
  let shouldUpdate = count =>
    wrapper.instance().shouldComponentUpdate({ count });

  expect(shouldUpdate(2)).toBe(false);
  expect(shouldUpdate(3)).toBe(true);
});

it("Updates count when clicking the button", () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.instance().state.count).toBe(1);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.instance().state.count).toBe(2);
});

it("Recieves props correctly", () => {
  const wrapper = shallow(<CounterButton color={"red"} />);
  expect(wrapper.instance().props.color).toBe("red");
});
