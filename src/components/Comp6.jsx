    import React from 'react';
    import '../App.css';
    import { Comp5 } from "./Comp5";
    import { Comp7 } from "./Comp7";


    export class Comp6 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp5: false,
          showComp6: true,
          showComp7: false,
          colorChangeHumana: true,
          colorChangeRadio: true,
          colorChangeJorna: true,
          colorChangeTeatro: true
        }
      }
      
      nextPage = () => {
        this.setState({
          showComp5: false,
          showComp6: false,
          showComp7: true
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
            {this.state.showComp5 ? <Comp5></Comp5> : null}

            {this.state.showComp6 ?
              <div className="col-sm-12 quest section-background-answers">
              <div className="title-quest-wrapper">
                <div className="col-sm-12 bar-title-wrapper">
                  <div className="col-sm-6">
                    <div className="title-answer-6 title-align-left">aquilo<br></br>que não pode faltar<br></br>no teu dia é:</div>
                  </div>
                  <div className="col-sm-6 black-bar-6"></div>
                </div>
              </div>

              <div className="col-sm-12 align-answers-left margin-top">
                    <ul>
                              <li onClick={this.props.toTeatro} className="red-color-hover">
                                  {this.state.colorChangeTeatro ? 
                                    <span onClick={this.changeColorTeatro}>Uma caminhada de 30min.</span> :
                                    <span onClick={this.changeColorTeatro} className="red-color-perm">Uma caminhada de 30min.</span>
                                  }
                                </li>
                                <li onClick={this.props.toHumana} className="green-color-hover">
                                  {this.state.colorChangeHumana ? 
                                    <span onClick={this.changeColorHumana}>Café.</span> :
                                    <span onClick={this.changeColorHumana} className="green-color-perm">Café.</span> 
                                  }
                                </li>
                                <li onClick={this.props.toRadio} className="blue-color-hover">
                                  {this.state.colorChangeRadio ? 
                                    <span onClick={this.changeColorRadio}>Ouvir música.</span> :
                                    <span onClick={this.changeColorRadio} className="blue-color-perm">Ouvir música.</span>
                                  }
                                </li>
                                <li onClick={this.props.toJorna} className="orange-color-hover">
                                  {this.state.colorChangeJorna ? 
                                    <span onClick={this.changeColorJorna}>Ler um livro ou um jornal.</span> :
                                    <span onClick={this.changeColorJorna} className="orange-color-perm">Ler um livro ou um jornal.</span>
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

            {this.state.showComp7 ? 
            <Comp7 
              toRadio={this.props.toRadio} 
              toJorna={this.props.toJorna} 
              toHumana={this.props.toHumana} 
              toTeatro={this.props.toTeatro}
              totalCategories={this.props.totalCategories}>
            </Comp7> : null}
          </section>
        );
      }
    }

