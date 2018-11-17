import React from 'react';
import '../App.css';
import { Comp9 } from "./Comp9";
import { Result } from "./Result";


export class Comp10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp9: false,
      showComp10: true,
      showResult: false,
    }
  }

  toResult = () => {
    this.setState({
      showComp10: false,
      showResult: true,
    })
  }
  
  render() {

    return (
      <section>
        {this.state.showComp9 ? <Comp9></Comp9> : null}

        {this.state.showComp10 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Q10</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toRadio}>Irrevente, livre, sem medo de desafios;</li>
                  <li onClick={this.props.toHumana}>Autónomo(a), responsável, consciente;</li>
                  <li onClick={this.props.toJorna}>Radical, subversivo(a), em constante aprendizagem;</li>
                  <li onClick={this.props.toTeatro}>Resposta 4</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.toResult}>Seguinte</button>
            </div>
          </div> : <Result totalCategories={this.props.totalCategories}></Result>}
      </section>
    );
  }
}

