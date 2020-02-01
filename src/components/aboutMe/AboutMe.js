import React from 'react';
import styles from '../App.css';

const AboutMe = () => (
  <section className={styles.aboutMe}>
    <h3>About Me</h3>
    <p>
            Full-Stack Software Developer with a strong background In troubleshooting and problem solving from background in the trades. Integrity and empathy are at the heart of all I do and I'm looking to join a team where I can put my interpersonal skills to use.
    </p>
    <br></br>
    <h3>Technologies</h3>
    <ul>
      <li>
    Languages: Javascript, HTML5, CSS3
      </li>
      <li>
            Front End: React, Redux
      </li>
      <li>
            Back End: Node.js, Express, CLI
      </li>
      <li>
            Testing Suites: Jest, QUnit
      </li>
      <li>
            Databases: PostgreSQL, MongoDB, Mongoose
      </li>
      <li>
            Tools: GitHub, Git, VSCode, Heroku, Slack, Compass, Postman
      </li>
    </ul>
  </section>
);
export default AboutMe;
