import React from 'react';
import '../App.css';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        questions: [
          'O que escolhias, rádio ou televisão?', 
          'O que escolhias, música ou cinema?',
        ],
        categories: {
          radio: 1,
          cinema: 2,
          musica: 3,
          arte: 4,
        },
        total: {
          radio: 0,
          cinema: 0,
          musica: 0,
          arte: 0,
        },
    }
  }   

  onAddToRadio = () => {
    if (this.state.total.radio++)
    
    console.log(this.state.total.radio)
  }

  render() {
    
    var question = this.state.questions[0]

    return (
      <section className="section-background">
        <div className="about-button-wrapper col-sm-12">
          <button className="about-button">About</button>
        </div>
        <div className="col-sm-12 quest-wrapper">
           <Comp1 toRadio={this.onAddToRadio}></Comp1>
        </div>
      </section>
    );
  }
}

