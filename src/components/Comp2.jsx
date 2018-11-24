    import React from 'react';
    import '../App.css';
    import { Comp1 } from "./Comp1";
    import { Comp3 } from "./Comp3";

    export class Comp2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp1: false,
          showComp2: true,
          showComp3: false,
          colorChangeHumana: true,
          colorChangeRadio: true,
          colorChangeJorna: true,
          colorChangeTeatro: true
        }
      }

      nextPage = () => {
        this.setState({
          showComp1: false,
          showComp2: false,
          showComp3: true
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
            {this.state.showComp1 ? <Comp1></Comp1> : null}

            {this.state.showComp2 ?
              <div className="col-sm-12 quest section-background-answers">
                <div className="title-quest-wrapper">
                  <div className="col-sm-12 bar-title-wrapper">
                    <div className="col-sm-6">
                      <div className="title-answer-2 title-align-left">as palavras<br></br>que melhor<br></br>te definem são:</div>
                    </div>
                    <div className="col-sm-6 black-bar-2"></div>
                  </div>
                </div>

                <div className="col-sm-12 align-answers-right">
                  <ul>
                        <li onClick={this.props.toTeatro} className="red-color-hover">
                          {this.state.colorChangeTeatro ? 
                            <span onClick={this.changeColorTeatro}>Irrevente, livre, sem medo de desafios;</span> :
                            <span onClick={this.changeColorTeatro} className="red-color-perm">Irrevente, livre, sem medo de desafios;</span>
                          }
                        </li>
                        <li onClick={this.props.toHumana} className="green-color-hover">
                          {this.state.colorChangeHumana ? 
                            <span onClick={this.changeColorHumana}>Autónomo(a), responsável, consciente;</span> :
                            <span onClick={this.changeColorHumana} className="green-color-perm">Autónomo(a), responsável, consciente;</span> 
                          }
                        </li>
                        <li onClick={this.props.toRadio} className="blue-color-hover">
                          {this.state.colorChangeRadio ? 
                            <span onClick={this.changeColorRadio}>Radical, subversivo(a), em constante aprendizagem;</span> :
                            <span onClick={this.changeColorRadio} className="blue-color-perm" >Radical, subversivo(a), em constante aprendizagem;</span>
                          }
                        </li>
                        <li onClick={this.props.toJorna} className="orange-color-hover">
                          {this.state.colorChangeJorna ? 
                            <span onClick={this.changeColorJorna}>Disciplinado(a), metódico(a), preocupado(a) com o futuro.</span> :
                            <span onClick={this.changeColorJorna} className="orange-color-perm">Disciplinado(a), metódico(a), preocupado(a) com o futuro.</span>
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

            {this.state.showComp3 ? 
            <Comp3
              toRadio={this.props.toRadio} 
              toJorna={this.props.toJorna} 
              toHumana={this.props.toHumana} 
              toTeatro={this.props.toTeatro}
              totalCategories={this.props.totalCategories}>
            </Comp3> : null}
          </section>
        );
      }
    }

