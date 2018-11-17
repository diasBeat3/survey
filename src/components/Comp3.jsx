import React from 'react';
import '../App.css';
import { Comp2 } from "./Comp2";
import { Comp4 } from "./Comp4";

export class Comp3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp2: false,
      showComp3: true,
      showComp4: false,
    }
  }
  
  nextPage = () => {
    this.setState({
      showComp2: false,
      showComp3: false,
      showComp4: true
    })
  }

  render() {
    return (
      <section>
        {this.state.showComp2 ? <Comp2></Comp2> : null}

        {this.state.showComp3 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Qual é a tua maior fraqueza?</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toHumana}>Ser um coração mole!</li>
                  <li onClick={this.props.toTeatro}>Preguiça.</li>
                  <li onClick={this.props.toRadio}>Falar demais.</li>
                  <li onClick={this.props.toJorna}>Necessidade constante de corrigir os outros.</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}

        {this.state.showComp4 ? 
        <Comp4 
          toRadio={this.props.toRadio} 
          toJorna={this.props.toJorna} 
          toHumana={this.props.toHumana} 
          toTeatro={this.props.toTeatro}
          totalCategories={this.props.totalCategories}>
        </Comp4> : null}
      </section>
    );
  }
}

