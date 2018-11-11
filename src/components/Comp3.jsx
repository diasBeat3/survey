import React from 'react';
import '../App.css';
import { Comp2 } from './Comp2';

export class Comp3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp2: false,
      showComp3: true,
      showComp4: false
    }
  }

  previousPage = () => {
    this.setState({
      showComp2: true,
      showComp3: false,
      showComp4: false
    })
  }

  nextPage = () => {
    this.setState({
      showComp2: false,
      showComp3: false,
      showComp4: true,
    })
  }

  render() {

    return (
      <section>
        <div className="col-sm-12 quest-wrapper">
          {this.state.showComp2 ? <Comp2></Comp2> : null}
          {this.state.showComp3 ? <div className="quest">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Questão 3</h3>
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
            <button onClick={this.nextPage}>next</button>
          </div> : null}
        </div>
      </section>
    );
  }
}

