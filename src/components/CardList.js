import React, { Fragment } from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <Fragment>
      {robots.map(robot => (
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
