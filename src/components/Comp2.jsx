import React from 'react';
import '../App.css';
import { Comp1 } from "./Comp1";
import { Comp3 } from "./Comp3";

export class Comp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp1: false,
      showComp2: true,
      showComp3: false,
    }
  }

  previousPage = () => {
    this.setState({
      showComp1: true,
      showComp2: false,
      showComp3: false,
    })
  }

  nextPage = () => {
    this.setState({
      showComp1: false,
      showComp2: false,
      showComp3: true
    })
  }

  render() {

    return (
      <section>
        {this.state.showComp1 ? <Comp1></Comp1> : null}
        <div className="col-sm-12 quest-wrapper">
          {this.state.showComp2 ? <div className="quest">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Questão 2</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toRadio}>Rádio</li>
                  <li>Música</li>
                  <li>Cinema</li>
                  <li>Resposta 4</li>
                </ul>
              </div>
            </div>
            <button onClick={this.previousPage}>previous</button>
            <button onClick={this.nextPage}>next</button>
          </div> : null}
          {this.state.showComp3 ? <Comp3></Comp3> : null}
        </div>
      </section>
    );
  }
}

