import React, { Fragment } from "react";
import Card from "./Card";
import { IRobot } from "../types";

interface IMainPageProps {
  robots: Array<IRobot>;
}

interface IMainPageState {}

export default function CardList({ robots }: IMainPageProps) {
  return (
    <Fragment>
      {robots.map((robot: IRobot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </Fragment>
  );
}
