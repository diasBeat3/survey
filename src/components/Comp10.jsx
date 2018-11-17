import React from 'react';
import '../App.css';
import { Comp9 } from "./Comp9";


export class Comp10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp9: false,
      showComp10: true,
    }
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
                  <li>Autónomo(a), responsável, consciente;</li>
                  <li>Radical, subversivo(a), em constante aprendizagem;</li>
                  <li>Resposta 4</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}
      </section>
    );
  }
}

