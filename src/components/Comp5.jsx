  import React from 'react';
  import '../App.css';
  import { Comp4 } from "./Comp4";
  import { Comp6 } from "./Comp6";


  export class Comp5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp4: false,
        showComp5: true,
        showComp6: false,
        colorChangeHumana: true,
        colorChangeRadio: true,
        colorChangeJorna: true,
        colorChangeTeatro: true
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp4: false,
        showComp5: false,
        showComp6: true
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
          {this.state.showComp4 ? <Comp4></Comp4> : null}

          {this.state.showComp5 ?
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-5">
                  <div className="title-answer-5 title-align-left">o que<br></br>é que preferias?</div>
                </div>
                <div className="col-sm-7 black-bar-5"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left margin-top">
              <ul>
                            <li onClick={this.props.toTeatro} className="red-color-hover">
                                {this.state.colorChangeTeatro ? 
                                  <span onClick={this.changeColorTeatro}>Perder todos os seguidores no Instagram;</span> :
                                  <span onClick={this.changeColorTeatro} className="red-color-perm">Perder todos os seguidores no Instagram;</span>
                                }
                              </li>
                              <li onClick={this.props.toHumana} className="green-color-hover">
                                {this.state.colorChangeHumana ? 
                                  <span onClick={this.changeColorHumana}>Ver todas as fotos do teu telemóvel publicadas no facebook;</span> :
                                  <span onClick={this.changeColorHumana} className="green-color-perm">Ver todas as fotos do teu telemóvel publicadas no facebook;</span> 
                                }
                              </li>
                              <li onClick={this.props.toRadio} className="blue-color-hover">
                                {this.state.colorChangeRadio ? 
                                  <span onClick={this.changeColorRadio}>Um famoso ‘retweetar' um foto horrível tua;</span> :
                                  <span onClick={this.changeColorRadio} className="blue-color-perm">Um famoso ‘retweetar' um foto horrível tua;</span>
                                }
                              </li>
                              <li onClick={this.props.toJorna} className="orange-color-hover">
                                {this.state.colorChangeJorna ? 
                                  <span onClick={this.changeColorJorna}>Ver a tua pior foto transformada num "meme" viral;</span> :
                                  <span onClick={this.changeColorJorna} className="orange-color-perm">Ver a tua pior foto transformada num "meme" viral;</span>
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

          {this.state.showComp6 ? 
          <Comp6 
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp6> : null}
        </section>
      );
    }
  }

