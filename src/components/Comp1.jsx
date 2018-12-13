      import React from 'react';
      import '../App.css';
      import { Comp2 } from "./Comp2";

      export class Comp1 extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            showComp1: true,
            showComp2: false,
            colorChangeHumana: true,
            colorChangeRadio: true,
            colorChangeJorna: true,
            colorChangeTeatro: true,
          }
        }

        nextPage = () => {
          this.setState({
            showComp1: false,
            showComp2: true
          })
        }

        changeColorHumana = () => {
          if (this.state.colorChangeRadio == true || this.state.colorChangeTeatro || this.state.colorChangeJorna
             == false) {
              this.setState({
                colorChangeRadio: true,
                colorChangeJorna: true,
                colorChangeTeatro: true,
              })
          }

          if (this.state.colorChangeHumana == true) {
            this.setState({
              colorChangeHumana: false
            })
        } else {
            this.setState({
              colorChangeHumana: true
            })
          }
        }

        changeColorRadio = () => {
          if (this.state.colorChangeHumana == true || this.state.colorChangeTeatro || this.state.colorChangeJorna
            == false) {
             this.setState({
               colorChangeHumana: true,
               colorChangeJorna: true,
               colorChangeTeatro: true,
             })
          }

          if (this.state.colorChangeRadio == true) {
            this.setState({
              colorChangeRadio: false
            })
        } else {
            this.setState({
              colorChangeRadio: true
            })
          }
        }

        changeColorTeatro = () => {
          if (this.state.colorChangeRadio == true || this.state.colorChangeHumana
             || this.state.colorChangeJorna
            == false) {
             this.setState({
               colorChangeRadio: true,
               colorChangeJorna: true,
               colorChangeHumana: true,
             })
          }

          if (this.state.colorChangeTeatro == true) {
            this.setState({
              colorChangeTeatro: false
            })
        } else {
            this.setState({
              colorChangeTeatro: true
            })
          }
        }

        changeColorJorna = () => {
          if (this.state.colorChangeRadio == true || this.state.colorChangeHumana
            || this.state.colorChangeTeatro
           == false) {
            this.setState({
              colorChangeRadio: true,
              colorChangeTeatro: true,
              colorChangeHumana: true,
            })
          }

          if (this.state.colorChangeJorna == true) {
            this.setState({
              colorChangeJorna: false
            })
        } else {
            this.setState({
              colorChangeJorna: true
            })
          }
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

                    <div className="col-sm-12 bar-title-wrapper bar-title-wrapper-mobile">
                          <div className="title-answer-1-mobile title-align-right">como descreverias<br></br>os teus hábitos<br></br>de sono?</div>
                    </div>

                    <div className="col-sm-12 align-answers-left font-size-mobile">
                      <ul>
                        <li onClick={this.props.toHumana} className="green-color-hover">
                          {this.state.colorChangeHumana ? 
                            <span onClick={this.changeColorHumana}>Se não dormir 8 horas, nem vale a pena sair de casa.</span> :
                            <span onClick={this.changeColorHumana} className="green-color-perm">Se não dormir 8 horas, nem vale a pena sair de casa.</span> 
                          }
                        </li>
                        <li onClick={this.props.toRadio} className="blue-color-hover">
                          {this.state.colorChangeRadio ? 
                            <span onClick={this.changeColorRadio}>Faça chuva faça sol, acordo sempre antes das 7h!</span> :
                            <span onClick={this.changeColorRadio} className="blue-color-perm" >Faça chuva faça sol, acordo sempre antes das 7h!</span>
                          }
                        </li>
                        <li onClick={this.props.toJorna} className="orange-color-hover">
                          {this.state.colorChangeJorna ? 
                            <span onClick={this.changeColorJorna}>3/4 horas por noite é suficiente para me manter activo(a).</span> :
                            <span onClick={this.changeColorJorna} className="orange-color-perm">3/4 horas por noite é suficiente para me manter activo(a).</span>
                          }
                        </li>
                        <li onClick={this.props.toTeatro} className="red-color-hover">
                          {this.state.colorChangeTeatro ? 
                            <span onClick={this.changeColorTeatro}>Fazer uma sesta pós-almoço é essencial!</span> :
                            <span onClick={this.changeColorTeatro} className="red-color-perm">Fazer uma sesta pós-almoço é essencial!</span>
                          }
                        </li>
                      </ul>
                    </div>
                    </div>
                    <div className="col-sm-12 align-right-button-next-question">
                          <div className="começar-bar-wrapper">
                            <div className="btn-start-wrapper font-size-btn-start" onClick={this.nextPage}>Próxima questão</div>
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

