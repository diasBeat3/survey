    import React from 'react';
    import '../App.css';
    import { Comp1 } from "./Comp1";
    import { Comp3 } from "./Comp3";

    export class Comp2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp1: false,
          showComp2: true,
          showComp3: false,
        }
      }

      nextPage = () => {
        this.setState({
          showComp1: false,
          showComp2: false,
          showComp3: true
        })
      }

      render() {

        return (
          <section>
            {this.state.showComp1 ? <Comp1></Comp1> : null}

            {this.state.showComp2 ?
              <div className="col-sm-12 quest section-background-answers">
                <div className="title-quest-wrapper">
                  <div className="col-sm-12 bar-title-wrapper">
                    <div className="col-sm-6">
                      <div className="title-answer-2 title-align-left">as palavras<br></br>que melhor<br></br>te definem são:</div>
                    </div>
                    <div className="col-sm-6 black-bar-2"></div>
                  </div>
                </div>

                <div className="col-sm-12 align-answers-right">
                  <ul>
                      <li onClick={this.props.toTeatro}>Irrevente, livre, sem medo de desafios;</li>
                      <li onClick={this.props.toHumana}>Autónomo(a), responsável, consciente;</li>
                      <li onClick={this.props.toRadio}>Radical, subversivo(a), em constante aprendizagem;</li>
                      <li onClick={this.props.toJorna}>Disciplinado(a), metódico(a), preocupado(a) com o futuro.</li>
                  </ul>
                </div>
                      
                <div className="col-sm-12 align-right-button-next-question margin-top">
                  <div className="começar-bar-wrapper">
                    <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                    <div className="bar-começar" onClick={this.nextPage}></div>
                  </div>
                </div>
              </div> : null}

            {this.state.showComp3 ? 
            <Comp3
              toRadio={this.props.toRadio} 
              toJorna={this.props.toJorna} 
              toHumana={this.props.toHumana} 
              toTeatro={this.props.toTeatro}
              totalCategories={this.props.totalCategories}>
            </Comp3> : null}
          </section>
        );
      }
    }

