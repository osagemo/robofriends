import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
let mockProps;

beforeEach(() => {
  mockProps = {
    robots: [],
    searchField: "",
    isPending: false,
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage", () => {
  expect(wrapper).toMatchSnapshot();
});

it("can filter the robots state", () => {
  mockProps = {
    robots: [
      {
        id: 1,
        name: "Kunta",
        email: "king@kunta.rymz"
      },
      {
        id: 2,
        name: "Busta",
        email: "Bus@ta.rymz"
      }
    ],
    searchField: "k",
    isPending: false,
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn()
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([
    {
      id: 1,
      name: "Kunta",
      email: "king@kunta.rymz"
    }
  ]);
});

it("shows a message when pending", () => {
  mockProps.isPending = true;
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().render()).toEqual(<h1>Fetching users...</h1>);
});
