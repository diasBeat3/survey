    import React from 'react';
    import '../App.css';
    import { Comp6 } from "./Comp6";
    import { Comp8 } from "./Comp8";


    export class Comp7 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp6: false,
          showComp7: true,
          showComp8: false,
          colorChangeHumana: true,
          colorChangeRadio: true,
          colorChangeJorna: true,
          colorChangeTeatro: true
        }
      }

      nextPage = () => {
        this.setState({
          showComp6: false,
          showComp7: false,
          showComp8: true
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
            {this.state.showComp6 ? <Comp6></Comp6> : null}

            {this.state.showComp7 ?
              <div className="col-sm-12 quest section-background-answers">

              <div className="title-quest-wrapper">
                <div className="col-sm-12 bar-title-wrapper">
                  <div className="col-sm-6">
                    <div className="title-answer-7 title-align-left">qual dos<br></br>seguintes nomes<br></br>conheces?</div>
                  </div>
                  <div className="col-sm-6 black-bar-7"></div>
                </div>
              </div>

              <div className="col-sm-12 bar-title-wrapper bar-title-wrapper-mobile">
                  <div className="title-answer-7-mobile title-align-left">qual dos<br></br>seguintes nomes<br></br>conheces?</div>
              </div>

              <div className="col-sm-12 align-answers-left margin-top font-size-mobile">
                <ul>
                                <li onClick={this.props.toTeatro} className="red-color-hover">
                                    {this.state.colorChangeTeatro ? 
                                      <span onClick={this.changeColorTeatro}>Custódia Gallego.</span> :
                                      <span onClick={this.changeColorTeatro} className="red-color-perm">Custódia Gallego</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toHumana} className="green-color-hover">
                                    {this.state.colorChangeHumana ? 
                                      <span onClick={this.changeColorHumana}>Joacine Katar Moreira</span> :
                                      <span onClick={this.changeColorHumana} className="green-color-perm">Joacine Katar Moreira</span> 
                                    }
                                  </li>
                                  <li onClick={this.props.toRadio} className="blue-color-hover">
                                    {this.state.colorChangeRadio ? 
                                      <span onClick={this.changeColorRadio}>Isilda Sanches</span> :
                                      <span onClick={this.changeColorRadio} className="blue-color-perm">Isilda Sanches</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toJorna} className="orange-color-hover">
                                    {this.state.colorChangeJorna ? 
                                      <span onClick={this.changeColorJorna}>Mário Lopes</span> :
                                      <span onClick={this.changeColorJorna} className="orange-color-perm">Mário Lopes</span>
                                    }
                                </li>
                      </ul>
                      </div>
                            
                      <div className="col-sm-12 align-right-button-next-question">
                        <div className="começar-bar-wrapper">
                          <div className="btn-start-wrapper font-size-btn-start" onClick={this.nextPage}>Próxima questão</div>
                          <div className="bar-começar" onClick={this.nextPage}></div>
                        </div>
                      </div>
                    </div> : null}

            {this.state.showComp8 ? 
              <Comp8 
                toRadio={this.props.toRadio} 
                toJorna={this.props.toJorna} 
                toHumana={this.props.toHumana} 
                toTeatro={this.props.toTeatro}
                totalCategories={this.props.totalCategories}>
              </Comp8> : null}
          </section>
        );
      }
    }

