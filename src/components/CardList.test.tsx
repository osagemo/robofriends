import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render CardList component with mock users", () => {
  const robotsMock = [
    {
      id: 1,
      name: "Kalle King",
      email: "abc@abc.se"
    },
    {
      id: 2,
      name: "Apkungen",
      email: "mk@gårpåtå.nu"
    }
  ];
  const wrapper = shallow(<CardList robots={robotsMock} />);
  expect(wrapper).toMatchSnapshot();
});
