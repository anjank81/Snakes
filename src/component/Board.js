import React from "react";
import Tile from "./Tile";
import styles from "./Snake.module.scss";
export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.renderBoardTiles = this.renderBoardTiles.bind(this);
    this.snakes = [
      {
        from: 17,
        to: 8,
      },
      {
        from: 54,
        to: 34,
      },
      {
        from: 62,
        to: 19,
      },
      {
        from: 64,
        to: 60,
      },
      {
        from: 87,
        to: 24,
      },
      {
        from: 93,
        to: 73,
      },
      {
        from: 95,
        to: 75,
      },
      {
        from: 99,
        to: 78,
      },
    ];
    this.ladders = [
      {
        from: 4,
        to: 14,
      },
      {
        from: 9,
        to: 31,
      },
      {
        from: 20,
        to: 38,
      },
      {
        from: 28,
        to: 84,
      },
      {
        from: 40,
        to: 59,
      },
      {
        from: 51,
        to: 67,
      },
      {
        from: 63,
        to: 81,
      },
      {
        from: 71,
        to: 91,
      },
    ];
  }

  renderBoardTiles(snakes, ladders) {
    let tileNum = 1;
    let boardTiles = [];

    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        boardTiles.push({
          row: i,
          col: j,
          num: tileNum,
          to: tileNum,
          players: [],
        });

        tileNum++;
      }
    }

    this.snakes.map((snake) => {
      boardTiles[snake.from - 1].to = snake.to;
      return console.log("snakes and ladders");
    });
    this.ladders.map((ladder) => {
      boardTiles[ladder.from - 1].to = ladder.to;
      return console.log("snakes and ladders");
    });
    this.props.players.map((player) => {
      boardTiles[player.boardLocation - 1].players.push(player);

      let toGo = boardTiles[player.boardLocation - 1].to;

      if (
        boardTiles[player.boardLocation - 1].to !==
        boardTiles[player.boardLocation - 1].num
      ) {
        console.log(
          "moving " +
            player.playerNum +
            " from " +
            boardTiles[player.boardLocation - 1].num +
            " to " +
            toGo
        );

        this.props.movePlayer(player.playerNum, toGo);
      } else {
      }
      return console.log("snakes and ladders");
    });

    return boardTiles;
  }

  render() {
    console.log(this.props);
    let boardTiles = this.renderBoardTiles(this.snakes, this.ladders);

    let lastActionText = "Press roll to play";

    if (this.props.lastRoll !== 0) {
      lastActionText = this.props.lastRoll;
    }

    let tiles = boardTiles.map((tile) => {
      return (
        <Tile
          row={tile.row}
          col={tile.col}
          num={tile.num}
          to={tile.to}
          players={tile.players}
        />
      );
    });

    return (
      <div>
        <div className={styles.representContainer}>
          <div className={styles.representHeader}>Representation:</div>
          <div className={styles.representTile}>Snakes (S)</div>
          <div className={styles.representData}>
            {this.snakes &&
              this.snakes.map((val) => {
                return (
                  <div>
                    {val.from}
                    {"--->"}
                    {val.to}
                  </div>
                );
              })}
          </div>
          <div className={styles.representTile}>Ladders (L)</div>
          <div className={styles.representData}>
            {this.ladders &&
              this.ladders.map((val) => {
                return (
                  <div>
                    {val.from}
                    {"--->"}
                    {val.to}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.board_header}>
          <div className={styles.player_turn}>
            Current Turn:
            <div className={styles.playerName}>
              &nbsp;Player {this.props.turn}
            </div>
          </div>
          <div className={styles.player_turn}>
            {this.props.lastRoll > 0 && <div>Rolled:</div>}
            <div className={styles.playerName}>&nbsp;{lastActionText}</div>
          </div>

          {this.props.lastRoll > 0 &&
            this.props.players &&
            this.props.players.map((val) => {
              return (
                <div>
                  Player {val.playerNum} is at {val.boardLocation}
                </div>
              );
            })}
          <button
            className={styles.roll_dice}
            onClick={() => this.props.rollDice()}
            style={{
              background:
                this.props.turn === 1
                  ? "#f44336"
                  : this.props.turn === 2
                  ? "#4caf50"
                  : this.props.turn === 3
                  ? "#2196f3"
                  : "#ffeb3b",
            }}
          >
            {this.props.lastRoll === 0 ? "Start" : "Roll"}
          </button>
        </div>
        <div className={styles.board}>{tiles}</div>
      </div>
    );
  }
}
