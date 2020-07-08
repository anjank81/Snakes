import React from "react";
import styles from "./Snake.module.scss";
export default class StartMenu extends React.Component {
  render() {
    return (
      <div className={styles.start_menu_container}>
        <h1 className={styles.start_title_text}>Snakes and Ladders</h1>
        <div className={styles.player_count_button_container}>
          <button
            className={styles.player_count_button}
            onClick={() => this.props.handleClick(2)}
          >
            2 Players
          </button>
          <button
            className={styles.player_count_button}
            onClick={() => this.props.handleClick(3)}
          >
            3 Players
          </button>
          <button
            className={styles.player_count_button}
            onClick={() => this.props.handleClick(4)}
          >
            4 Players
          </button>
        </div>
      </div>
    );
  }
}
