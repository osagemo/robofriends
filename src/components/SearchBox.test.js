import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

// setSearchField(event.target.value)

let wrapper;
let searchField;
const searchChange = text => {
  searchField = text;
};

beforeEach(() => {
  wrapper = shallow(<SearchBox searchChange={searchChange} />);
});

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("sets a searchField from text input onChange", () => {
  wrapper.find("input").simulate("change", "hello");
  expect(searchField).toEqual("hello");
});
