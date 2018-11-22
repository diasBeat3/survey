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
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp8: false,
        showComp9: false,
        showComp10: true
      })
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

            <div className="col-sm-12 align-answers-left">
              <ul>
                    <li onClick={this.props.toRadio}>"Ia perguntar o mesmo!"</li>
                    <li onClick={this.props.toJorna}>"Pode ser. Mas só um copo mesmo!"</li>
                    <li onClick={this.props.toHumana}>Não dá amanhã acordo cedo."</li>
                    <li onClick={this.props.toTeatro}>"Sim, precisamos de por a conversa em dia"</li>
                    </ul>
                      </div>
                            
                      <div className="col-sm-12 align-right-button-next-question">
                        <div className="começar-bar-wrapper">
                          <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
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

