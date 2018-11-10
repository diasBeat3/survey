import React from 'react';
import '../App.css';
import { Comp2 } from "./Comp2";

export class Comp1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showComp1: true,
        showComp2: false,
    }
  }   

  nextPage = () => {
    this.setState({
      showComp1: false,
      showComp2: true
    })

    console.log(this.state.showComp2)
  }
    
  render() {

    return (
      <section>
        <div className="col-sm-12 quest-wrapper">
            {this.state.showComp1 ? <div className="quest">
              <h3>Questão 1</h3>
              <ul>
                <li>Resposta 1</li>
                <li>Resposta 2</li>
                <li>Resposta 3</li>
                <li>Resposta 4</li>
              </ul>
              <button onClick={this.nextPage}>next</button>
            </div> : <Comp2></Comp2>}
            
        </div>
      </section>
    );
  }
}

