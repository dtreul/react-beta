import React, { Component } from "react";
import Background from "../background/background";
import styles from "./baseLayout.module.scss";

type BaseLayoutProps = {
  children: React.ReactNode;
};

class BaseLayout extends Component {
  public constructor(props: BaseLayoutProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.main}>
        <div className={styles.background}>
          <Background></Background>
        </div>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default BaseLayout;
