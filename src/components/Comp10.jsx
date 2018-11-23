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
    }
  }

  toResult = () => {
    this.setState({
      showComp10: false,
      showResult: true,
    })
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
                <li onClick={this.props.toHumana}>A sua bondade;</li>
                <li onClick={this.props.toJorna}>O seu espírito crítico;</li>
                <li onClick={this.props.toRadio}>A sua energia;</li>
                <li onClick={this.props.toTeatro}>Ser uma ‘open-mind’;</li>
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

