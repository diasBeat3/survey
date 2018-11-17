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
        <div>
          {this.state.showComp1 ?
            <div className="quest section-background-comp1">
              <div className="title-quest-wrapper">
                <div className="title-wrapper">
                  <h1>Como descreverias os teus hábitos de sono? </h1>
                </div>

                <div className="quest-wrapper">
                  <ul>
                    <li onClick={this.props.toHumana}>Se não dormir 8 horas, nem vale a pena sair de casa.</li>
                    <li onClick={this.props.toRadio}>Faça chuva faça sol, acordo sempre antes das 7h!</li>
                    <li onClick={this.props.toJorna}>3/4 horas por noite é suficiente para me manter activo(a).</li>
                    <li onClick={this.props.toTeatro}>Fazer uma sesta pós-almoço é essencial!</li>
                  </ul>
                </div>
              </div>
              <div className="align-right">
                <button onClick={this.nextPage}>Próxima questão</button>
              </div>
            </div>
            : <Comp2 toRadio={this.props.radio} toJorna={this.props.jorna} toHumana={this.props.humana} toTeatro={this.props.teatro}></Comp2>}
        </div>
      </section>
    );
  }
}

