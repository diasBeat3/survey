  import React from 'react';
  import '../App.css';
  import { Comp7 } from "./Comp7";
  import { Comp9 } from "./Comp9";


  export class Comp8 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp7: false,
        showComp8: true,
        showComp9: false,
        colorChangeHumana: true,
        colorChangeRadio: true,
        colorChangeJorna: true,
        colorChangeTeatro: true
      }
    }

    nextPage = () => {
      this.setState({
        showComp7: false,
        showComp8: false,
        showComp9: true
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
          {this.state.showComp7 ? <Comp7></Comp7> : null}

          {this.state.showComp8 ?
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-7 black-bar-8"></div>
                <div className="col-sm-5">
                  <div className="title-answer-8 title-align-right">escolhe<br></br>um hobby:</div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left margin-top">
              <ul>
                                <li onClick={this.props.toTeatro} className="red-color-hover">
                                    {this.state.colorChangeTeatro ? 
                                      <span onClick={this.changeColorTeatro}>Yoga.</span> :
                                      <span onClick={this.changeColorTeatro} className="red-color-perm">Yoga.</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toHumana} className="green-color-hover">
                                    {this.state.colorChangeHumana ? 
                                      <span onClick={this.changeColorHumana}>Pintura.</span> :
                                      <span onClick={this.changeColorHumana} className="green-color-perm">Pintura.</span> 
                                    }
                                  </li>
                                  <li onClick={this.props.toRadio} className="blue-color-hover">
                                    {this.state.colorChangeRadio ? 
                                      <span onClick={this.changeColorRadio}>Jardinagem.</span> :
                                      <span onClick={this.changeColorRadio} className="blue-color-perm">Jardinagem.</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toJorna} className="orange-color-hover">
                                    {this.state.colorChangeJorna ? 
                                      <span onClick={this.changeColorJorna}>Fazer crochet.</span> :
                                      <span onClick={this.changeColorJorna} className="orange-color-perm">Fazer crochet.</span>
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

          {this.state.showComp9 ? 
          <Comp9
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp9> : null}
        </section>
      );
    }
  }

