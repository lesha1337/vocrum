import React, { Component } from "react";
import styles from "./styles.module.scss";

export default class FeatureContainer extends Component {
  render() {
    return (
      <div className={styles.feature}>
        <div className={styles.left}>
          <div>
            <h1>{this.props.title}</h1>
          </div>
          <div>{this.props.children}</div>
          <div>
            <button>Оставить заявку</button>
          </div>
        </div>

        <div className={styles.right}>
          <div>here will be image</div>
        </div>
      </div>
    );
  }
}
