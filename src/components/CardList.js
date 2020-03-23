import React, { Fragment } from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  console.log("CardList");
  return (
    <Fragment>
      {robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </Fragment>
  );
}
