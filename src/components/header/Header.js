import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <section>
          <div>
            <h1>Matt Munch</h1>
            <h2>Software Developer</h2>
          </div>
          <ul>
            <li>Cell: 208-553-0332</li>
            <li>Email: mattmunch94@gmail.com</li>
            <li>Website: mattmunch.io</li>
            <li>LinkedIn: /mattmunch</li>
          </ul>
        </section>
      </header>
    );
  }
}
