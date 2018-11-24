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
            colorChangeHumana: true,
            colorChangeRadio: true,
            colorChangeJorna: true,
            colorChangeTeatro: true
          }
        }
        
        nextPage = () => {
          this.setState({
            showComp2: false,
            showComp3: false,
            showComp4: true
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
              {this.state.showComp2 ? <Comp2></Comp2> : null}

              {this.state.showComp3 ?
                <div className="col-sm-12 quest section-background-answers">
                <div className="title-quest-wrapper">
                  <div className="col-sm-12 bar-title-wrapper">
                    <div className="col-sm-6">
                      <div className="title-answer-3 title-align-left">qual é a tua <br></br>maior fraqueza?</div>
                    </div>
                    <div className="col-sm-6 black-bar-3"></div>
                  </div>
                </div>

                <div className="col-sm-12 align-answers-left margin-top">
                          <ul>
                            <li onClick={this.props.toTeatro} className="red-color-hover">
                              {this.state.colorChangeTeatro ? 
                                <span onClick={this.changeColorTeatro}>Preguiça!</span> :
                                <span onClick={this.changeColorTeatro} className="red-color-perm">Preguiça!</span>
                              }
                            </li>
                            <li onClick={this.props.toHumana} className="green-color-hover">
                              {this.state.colorChangeHumana ? 
                                <span onClick={this.changeColorHumana}>Ser um coração mole!</span> :
                                <span onClick={this.changeColorHumana} className="green-color-perm">Ser um coração mole!</span> 
                              }
                            </li>
                            <li onClick={this.props.toRadio} className="blue-color-hover">
                              {this.state.colorChangeRadio ? 
                                <span onClick={this.changeColorRadio}>Falar demais!</span> :
                                <span onClick={this.changeColorRadio} className="blue-color-perm">Falar demais!</span>
                              }
                            </li>
                            <li onClick={this.props.toJorna} className="orange-color-hover">
                              {this.state.colorChangeJorna ? 
                                <span onClick={this.changeColorJorna}>Necessidade constante de corrigir os outros.</span> :
                                <span onClick={this.changeColorJorna} className="orange-color-perm">Necessidade constante de corrigir os outros.</span>
                              }
                            </li>
                          </ul>
                </div>
                            
                <div className="col-sm-12 align-right-button-next-question margin-top">
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

