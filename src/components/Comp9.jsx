  import React from 'react';
  import '../App.css';
  import { Comp8 } from "./Comp8";
  import { Comp10 } from "./Comp10";


  export class Comp9 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp8: false,
        showComp9: true,
        showComp10: false,
        colorChangeHumana: true,
        colorChangeRadio: true,
        colorChangeJorna: true,
        colorChangeTeatro: true
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp8: false,
        showComp9: false,
        showComp10: true
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
          {this.state.showComp8 ? <Comp8></Comp8> : null}

          {this.state.showComp9 ?
            <div className="col-sm-12 quest section-background-answers">

            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-5 black-bar-9"></div>
                <div className="col-sm-7">
                  <div className="title-answer-9 title-align-right">quando te convidam<br></br>para ir beber um copo<br></br>respondes com:</div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-12 bar-title-wrapper bar-title-wrapper-mobile">
              <div className="title-answer-9-mobile title-align-right">quando te convidam<br></br>para ir beber um copo<br></br>respondes com:</div>
            </div>

            <div className="col-sm-12 align-answers-left margin-top font-size-mobile">
              <ul>
                                  <li onClick={this.props.toTeatro} className="red-color-hover">
                                    {this.state.colorChangeTeatro ? 
                                      <span onClick={this.changeColorTeatro}>"Sim, precisamos de por a conversa em dia"</span> :
                                      <span onClick={this.changeColorTeatro} className="red-color-perm">"Sim, precisamos de por a conversa em dia"</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toHumana} className="green-color-hover">
                                    {this.state.colorChangeHumana ? 
                                      <span onClick={this.changeColorHumana}>"Não dá amanhã acordo cedo."</span> :
                                      <span onClick={this.changeColorHumana} className="green-color-perm">"Não dá amanhã acordo cedo."</span> 
                                    }
                                  </li>
                                  <li onClick={this.props.toRadio} className="blue-color-hover">
                                    {this.state.colorChangeRadio ? 
                                      <span onClick={this.changeColorRadio}>"Ia perguntar o mesmo!"</span> :
                                      <span onClick={this.changeColorRadio} className="blue-color-perm">"Ia perguntar o mesmo!"</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toJorna} className="orange-color-hover">
                                    {this.state.colorChangeJorna ? 
                                      <span onClick={this.changeColorJorna}>"Pode ser. Mas só um copo mesmo!"</span> :
                                      <span onClick={this.changeColorJorna} className="orange-color-perm">"Pode ser. Mas só um copo mesmo!"</span>
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

          {this.state.showComp10 ? 
          <Comp10
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp10> : null}
        </section>
      );
    }
  }

