  import React from 'react';
  import '../App.css';
  import { Comp3 } from "./Comp3";
  import { Comp5 } from "./Comp5";

  export class Comp4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp3: false,
        showComp4: true,
        showComp5: false,
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp3: false,
        showComp4: false,
        showComp5: true
      })
    }

    render() {

      return (
        <section>
          {this.state.showComp ? <Comp3></Comp3> : null}

          {this.state.showComp4 ?
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-4">
                  <div className="title-answer-4 title-align-left">o que é que<br></br>te incomoda<br></br>mais?</div>
                </div>
                <div className="col-sm-8 black-bar-4"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left">
              <ul>
                    <li onClick={this.props.toHumana}>Má educação.</li>
                    <li onClick={this.props.toRadio}>Demasiadas regras.</li>
                    <li onClick={this.props.toJorna}>Procrastinadores.</li>
                    <li onClick={this.props.toTeatro}>Deslealdade.</li>
                    </ul>
              </div>
                          
              <div className="col-sm-12 align-right-button-next-question">
                  <div className="começar-bar-wrapper">
                    <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                    <div className="bar-começar" onClick={this.nextPage}></div>
                  </div>
                </div>
              </div> : null}

          {this.state.showComp5 ? 
          <Comp5 
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp5> : null}
        </section>
      );
    }
  }

