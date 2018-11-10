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
              <h3>Questão 3</h3>
              <ul>
                <li>Resposta 1</li>
                <li>Resposta 2</li>
                <li>Resposta 3</li>
                <li>Resposta 4</li>
              </ul>
              <button onClick={this.previousPage}>previous</button>
              <button onClick={this.nextPage}>next</button>
            </div> : null }
        </div>
      </section>
    );
  }
}

