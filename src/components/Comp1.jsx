import React from 'react';
import '../App.css';
import { Comp2 } from "./Comp2";
import { About } from "./About";

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
        <div>
            {this.state.showComp1 ? <div className="quest">
              <div className="title-quest-wrapper">
                  <div className="title-wrapper">
                    <h3>Questão 1</h3>
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
            </div> : <Comp2></Comp2>}
        </div>
      </section>
    );
  }
}

