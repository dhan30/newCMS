import React from 'react';
import Selectable from '../Calendar/Selectable';
import Nav from '../Nav/Nav';
import style from './style.css';

class Main extends React.Component {

  render() {
    return (
      <div>
        <div className={style.navv}>
          <p>Welcome to CMS</p>
          <p>Company Management System</p>
        </div>
      </div>
    );
  }
}
export default Main;
