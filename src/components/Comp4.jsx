    import React from 'react';
    import '../App.css';
    import { Comp3 } from "./Comp3";
    import { Comp5 } from "./Comp5";

    export class Comp4 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp3: false,
          showComp4: true,
          showComp5: false,
          colorChangeHumana: true,
          colorChangeRadio: true,
          colorChangeJorna: true,
          colorChangeTeatro: true
        }
      }
      
      nextPage = () => {
        this.setState({
          showComp3: false,
          showComp4: false,
          showComp5: true
        })
      }

      changeColorHumana = () => {
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
            {this.state.showComp ? <Comp3></Comp3> : null}

            {this.state.showComp4 ?
              <div className="col-sm-12 quest section-background-answers">
              <div className="title-quest-wrapper">
                <div className="col-sm-12 bar-title-wrapper">
                  <div className="col-sm-6">
                    <div className="title-answer-4 title-align-left">o que é que<br></br>te incomoda<br></br>mais?</div>
                  </div>
                  <div className="col-sm-6 black-bar-4"></div>
                </div>
              </div>

              <div className="col-sm-12 align-answers-left margin-top">
                <ul>
                              <li onClick={this.props.toTeatro} className="red-color-hover">
                                {this.state.colorChangeTeatro ? 
                                  <span onClick={this.changeColorTeatro}>Deslealdade.</span> :
                                  <span onClick={this.changeColorTeatro} className="red-color-perm">Deslealdade.</span>
                                }
                              </li>
                              <li onClick={this.props.toHumana} className="green-color-hover">
                                {this.state.colorChangeHumana ? 
                                  <span onClick={this.changeColorHumana}>Má educação.</span> :
                                  <span onClick={this.changeColorHumana} className="green-color-perm">Má educação.</span> 
                                }
                              </li>
                              <li onClick={this.props.toRadio} className="blue-color-hover">
                                {this.state.colorChangeRadio ? 
                                  <span onClick={this.changeColorRadio}>Demasiadas regras.</span> :
                                  <span onClick={this.changeColorRadio} className="blue-color-perm">Demasiadas regras.</span>
                                }
                              </li>
                              <li onClick={this.props.toJorna} className="orange-color-hover">
                                {this.state.colorChangeJorna ? 
                                  <span onClick={this.changeColorJorna}>Procrastinadores.</span> :
                                  <span onClick={this.changeColorJorna} className="orange-color-perm">Procrastinadores</span>
                                }
                              </li>
                      </ul>
                </div>
                            
                <div className="col-sm-12 align-right-button-next-question">
                    <div className="começar-bar-wrapper">
                      <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                      <div className="bar-começar" onClick={this.nextPage}></div>
                    </div>
                  </div>
                </div> : null}

            {this.state.showComp5 ? 
            <Comp5 
              toRadio={this.props.toRadio} 
              toJorna={this.props.toJorna} 
              toHumana={this.props.toHumana} 
              toTeatro={this.props.toTeatro}
              totalCategories={this.props.totalCategories}>
            </Comp5> : null}
          </section>
        );
      }
    }

