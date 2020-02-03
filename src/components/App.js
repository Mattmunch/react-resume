import React from 'react';
import Header from './header/Header';
import AboutMe from './aboutMe/AboutMe';
import Education from './education/Education';
import WorkHistory from './workHistory/WorkHistory';
import Projects from './projects/Projects';
import styles from './App.css';

export default function App() {
  return <>
  
    <Header className={styles.header}/>
    <main className={styles.main}>
      <AboutMe className={styles.aboutMe}/>
      <Education className={styles.education}/>
      <WorkHistory className={styles.workHistory}/>
      <Projects className={styles.projects}/>

    </main>;
  </>;
}
    
