import React from 'react';
import '../App.css';
import { About } from "./About";

export class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComp1: true,
      showComp2: false,
    }
  }

  render() {

    return (
      <section>
        <div>
          <div>
            Intro
          </div>
        </div>
      </section>
    );
  }
}

