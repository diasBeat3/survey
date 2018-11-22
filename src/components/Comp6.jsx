  import React from 'react';
  import '../App.css';
  import { Comp5 } from "./Comp5";
  import { Comp7 } from "./Comp7";


  export class Comp6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp5: false,
        showComp6: true,
        showComp7: false,
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp5: false,
        showComp6: false,
        showComp7: true
      })
    }

    render() {

      return (
        <section>
          {this.state.showComp5 ? <Comp5></Comp5> : null}

          {this.state.showComp6 ?
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-6">
                  <div className="title-answer-6 title-align-left">aquilo<br></br>que não pode faltar<br></br>no teu dia é:</div>
                </div>
                <div className="col-sm-6 black-bar-6"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left">
              <ul>
                    <li onClick={this.props.toHumana}>Café.</li>
                    <li onClick={this.props.toTeatro}>Uma caminhada de 30min.</li>
                    <li onClick={this.props.toRadio}>Ouvir música.</li>
                    <li onClick={this.props.toJorna}>Ler um livro ou um jornal.</li>
                    </ul>
                  </div>
                        
                  <div className="col-sm-12 align-right-button-next-question">
                    <div className="começar-bar-wrapper">
                      <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                      <div className="bar-começar" onClick={this.nextPage}></div>
                    </div>
                  </div>
                </div> : null}

          {this.state.showComp7 ? 
          <Comp7 
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp7> : null}
        </section>
      );
    }
  }

