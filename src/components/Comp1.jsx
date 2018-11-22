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
      }

      render() {

        return (
          <section>
            <div>
              {this.state.showComp1 ?
                <div className="col-sm-12 quest section-background-answers">
                  <div className="title-quest-wrapper">
                  <div className="col-sm-12 bar-title-wrapper">
                      
                  <div className="col-sm-5 black-bar"></div>
                      <div className="col-sm-7">
                        <div className="title-answer-1 title-align-right">como descreverias<br></br>os teus hábitos<br></br>de sono?</div>
                      </div>
                    
                  </div>
                  <div className="col-sm-12 quest-wrapper align-answers-left">
                    <ul>
                      <li onClick={this.props.toHumana}>Se não dormir 8 horas, nem vale a pena sair de casa.</li>
                      <li onClick={this.props.toRadio}>Faça chuva faça sol, acordo sempre antes das 7h!</li>
                      <li onClick={this.props.toJorna}>3/4 horas por noite é suficiente para me manter activo(a).</li>
                      <li onClick={this.props.toTeatro}>Fazer uma sesta pós-almoço é essencial!</li>
                    </ul>
                  </div>
                  </div>
                  <div className="col-sm-12 align-right-button-next-question">
                        <div className="começar-bar-wrapper">
                          <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                          <div className="bar-começar" onClick={this.nextPage}></div>
                        </div>
                    </div>
                </div>
                : <Comp2 
                toRadio={this.props.toRadio} 
                toJorna={this.props.toJorna} 
                toHumana={this.props.toHumana} 
                toTeatro={this.props.toTeatro}
                totalCategories={this.props.totalCategories}>
                </Comp2>
              }
            </div>
          </section>
        );
      }
    }

