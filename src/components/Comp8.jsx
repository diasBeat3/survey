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
      }
    }

    nextPage = () => {
      this.setState({
        showComp7: false,
        showComp8: false,
        showComp9: true
      })
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
                    <li onClick={this.props.toRadio}>Jardinagem.</li>
                    <li onClick={this.props.toJorna}>Fazer crochet.</li>
                    <li onClick={this.props.toHumana}>Pintura.</li>
                    <li onClick={this.props.toTeatro}>Yoga.</li>
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

