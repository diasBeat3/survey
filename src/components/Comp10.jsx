import React from 'react';
import '../App.css';
import { Comp9 } from "./Comp9";
import { Result } from "./Result";


export class Comp10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp9: false,
      showComp10: true,
      showResult: false,
      colorChangeHumana: true,
      colorChangeRadio: true,
      colorChangeJorna: true,
      colorChangeTeatro: true
    }
  }

  toResult = () => {
    this.setState({
      showComp10: false,
      showResult: true,
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
        {this.state.showComp9 ? <Comp9></Comp9> : null}

        {this.state.showComp10 ?
          <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-6">
                  <div className="title-answer-7 title-align-left">aquilo que mais<br></br>aprecias nas pessoas é?</div>
                </div>
                <div className="col-sm-6 black-bar-7"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left  margin-top">
              <ul>
                                  <li onClick={this.props.toTeatro} className="red-color-hover">
                                    {this.state.colorChangeTeatro ? 
                                      <span onClick={this.changeColorTeatro}>Ser uma ‘open-mind’;</span> :
                                      <span onClick={this.changeColorTeatro} className="red-color-perm">Ser uma ‘open-mind’;</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toHumana} className="green-color-hover">
                                    {this.state.colorChangeHumana ? 
                                      <span onClick={this.changeColorHumana}>A sua bondade;</span> :
                                      <span onClick={this.changeColorHumana} className="green-color-perm">A sua bondade;</span> 
                                    }
                                  </li>
                                  <li onClick={this.props.toRadio} className="blue-color-hover">
                                    {this.state.colorChangeRadio ? 
                                      <span onClick={this.changeColorRadio}>A sua energia;</span> :
                                      <span onClick={this.changeColorRadio} className="blue-color-perm">A sua energia;</span>
                                    }
                                  </li>
                                  <li onClick={this.props.toJorna} className="orange-color-hover">
                                    {this.state.colorChangeJorna ? 
                                      <span onClick={this.changeColorJorna}>O seu espírito crítico;</span> :
                                      <span onClick={this.changeColorJorna} className="orange-color-perm">O seu espírito crítico;</span>
                                    }
                                </li>
              </ul>
            </div>

            <div className="col-sm-12 align-right-button-next-question">
              <div className="começar-bar-wrapper">
                <div className="btn-start-wrapper" onClick={this.toResult}>resultado</div>
                <div className="bar-começar" onClick={this.nextPage}></div>
              </div>
            </div>
          </div> : <Result totalCategories={this.props.totalCategories}></Result>}
      </section>
    );
  }
}

