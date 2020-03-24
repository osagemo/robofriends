import React, { PureComponent, Fragment } from "react";

export default class Card extends PureComponent {
  render() {
    const { name, email, id } = this.props;
    return (
      <Fragment>
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
          <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
