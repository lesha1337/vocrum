import React, { Component } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

class Wrapper extends Component {
  static defaultProps = {
    withGradient: false
  };

  render() {
    return (
      <div
        className={classNames(
          styles.wrapper,
          this.props.className,
          this.props.withGradient && styles.withGradient
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
