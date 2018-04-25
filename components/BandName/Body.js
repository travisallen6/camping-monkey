import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      userInput,
      handleChange,
      findBandName,
      taken,
      searched
    } = this.props;

    return (
      <view>
        <h1 className="title">IS THIS BAND NAME TAKEN?</h1>
        <input
          type="text"
          value={userInput}
          placeholder="Band Name"
          onChange={e => handleChange(e.target.value)}
          className="searchbar"
        />
        <button onClick={findBandName}>?</button>
        {taken ? (
          <p> Sorry that name is taken</p>
        ) : searched ? (
          <p> That name is available!</p>
        ) : null}
        <footer className="footer" />
      </view>
    );
  }
}
export default Body;
