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
                    <h1>Como descreverias os teus hábitos de sono? </h1>
                  </div>

                  <div className="quest-wrapper">
                    <ul>
                      <li onClick={this.props.toRadio}>Se não dormir 8 horas, nem vale a pena sair de casa.</li>
                      <li>Faça chuva faça sol, acordo sempre antes das 7h!</li>
                      <li>3/4 horas por noite é suficiente para me manter activo(a).</li>
                      <li>Fazer uma sesta pós-almoço é essencial!</li>
                    </ul>
                  </div>
              </div>
              <button onClick={this.nextPage}>Próxima questão</button>
            </div> : <Comp2></Comp2>}
        </div>
      </section>
    );
  }
}

