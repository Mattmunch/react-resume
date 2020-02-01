import React from 'react';
import styles from '../App.css';

const Projects = () => (
  <section className={styles.projects}>
    <h3>Projects</h3>
    <p>
      <b>Follow The Money</b> | Full-Stack Development | Site // GitHub
Tech Stack // <i>Node.js, Express, PostgreSQL</i>
Follow The Money is an application that provides an easily digestible way to compare presidential candidates and what size campaign contributions they receive. 
    </p>
    <p>
      <b>Ante-up</b> | Backend Development | NPM package // GitHub
Tech Stack // <i>Node.js, Socket.io, Inquirer, MongoDB</i>
Ante-up is a multi-player application that provides a user-friendly way to  learn how Texas Hold-em hands rank amongst each other. Four day team sprint, I contributed the server to client socket communication for game flow
    </p>
    <p>
      <b>Guess Who</b> | Front-End Development | Site // GitHub
Tech Stack // <i>Vanilla Javascript, HTML5, CSS3</i>
Guess Who is a single-player application, modeled after the popular board game, that provides a user-friendly way to teach culturally-sensitive strategies to identify beings using their characteristics. Four day team sprint, I contributed the game logic
    </p>
  </section>
);
export default Projects;
