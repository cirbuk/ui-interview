import React, { Component } from 'react';

import styles from './styles.scss';

export default class TestComponent extends Component {
  render() {
    return (
      <div className={styles.color}>{this.props.children}</div>
    );
  };
}
