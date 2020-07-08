import React, { Component } from "react";
import styles from "./Snake.module.scss";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div
        className={
          this.props.number == 1
            ? styles.player_1
            : this.props.number == 2
            ? styles.player_2
            : this.props.number == 3
            ? styles.player_3
            : styles.player_4
        }
      ></div>
    );
  }
}
