import React, { Component } from "react";
import Player from "./Player";
import styles from "./Snake.module.scss";
export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tileType = "";

    if (this.props.num > this.props.to) {
      tileType = "S";
    } else if (this.props.num < this.props.to) {
      tileType = "L";
    }

    let players = this.props.players.map((player) => {
      return (
        <Player number={player.playerNum} location={player.boardLocation} />
      );
    });

    return (
      <div className={styles.tile}>
        <div className={styles.tile_number}>{this.props.num}</div>

        <div className={styles.tile_type}>{tileType}</div>

        <div className={styles.tile_players_container}>{players}</div>
      </div>
    );
  }
}
