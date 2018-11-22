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
      }
    }

    nextPage = () => {
      this.setState({
        showComp6: false,
        showComp7: false,
        showComp8: true
      })
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

            <div className="col-sm-12 align-answers-left">
              <ul>
                    <li onClick={this.props.toJorna}>Mário Lopes</li>
                    <li onClick={this.props.toHumana}>Joacine Katar Moreira</li>
                    <li onClick={this.props.toRadio}>Isilda Sanches</li>
                    <li onClick={this.props.toTeatro}>Custódia Gallego</li>
                    </ul>
                    </div>
                          
                    <div className="col-sm-12 align-right-button-next-question">
                      <div className="começar-bar-wrapper">
                        <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
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

