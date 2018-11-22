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
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-4">
                  <div className="title-answer-3 title-align-left">qual é<br></br>a tua maior<br></br>fraqueza?</div>
                </div>
                <div className="col-sm-8 black-bar-3"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left">
              <ul>
                <li onClick={this.props.toHumana}>Ser um coração mole!</li>
                <li onClick={this.props.toTeatro}>Preguiça!</li>
                <li onClick={this.props.toRadio}>Falar demais!</li>
                <li onClick={this.props.toJorna}>Necessidade constante de corrigir os outros.</li>
              </ul>
            </div>
                        
            <div className="col-sm-12 align-right-button-next-question">
                <div className="começar-bar-wrapper">
                  <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                  <div className="bar-começar" onClick={this.nextPage}></div>
                </div>
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

