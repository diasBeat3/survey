  import React from 'react';
  import '../App.css';
  import { Comp4 } from "./Comp4";
  import { Comp6 } from "./Comp6";


  export class Comp5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComp4: false,
        showComp5: true,
        showComp6: false,
      }
    }
    
    nextPage = () => {
      this.setState({
        showComp4: false,
        showComp5: false,
        showComp6: true
      })
    }

    render() {

      return (
        <section>
          {this.state.showComp4 ? <Comp4></Comp4> : null}

          {this.state.showComp5 ?
            <div className="col-sm-12 quest section-background-answers">
            <div className="title-quest-wrapper">
              <div className="col-sm-12 bar-title-wrapper">
                <div className="col-sm-5">
                  <div className="title-answer-5 title-align-left">o que<br></br>é que preferias?</div>
                </div>
                <div className="col-sm-7 black-bar-5"></div>
              </div>
            </div>

            <div className="col-sm-12 align-answers-left">
              <ul>
                    <li onClick={this.props.toRadio}>Ver todas as fotos do teu telemóvel publicadas no facebook;</li>
                    <li onClick={this.props.toTeatro}>Ver a tua pior foto transformada num "meme" viral;</li>
                    </ul>
              </div>
                          
              <div className="col-sm-12 align-right-button-next-question">
                  <div className="começar-bar-wrapper">
                    <div className="btn-start-wrapper" onClick={this.nextPage}>Próxima questão</div>
                    <div className="bar-começar" onClick={this.nextPage}></div>
                  </div>
                </div>
              </div> : null}

          {this.state.showComp6 ? 
          <Comp6 
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp6> : null}
        </section>
      );
    }
  }

