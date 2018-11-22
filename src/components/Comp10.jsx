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
                    <div className="col-sm-5 black-bar-10"></div>
                    
                  </div>
                </div>    
                  <div className="col-sm-12 align-right-button-next-question align-bottom">
                      <div className="começar-bar-wrapper">
                        <div className="btn-start-wrapper" onClick={this.toResult}>Próxima questão</div>
                      <div className="bar-começar" onClick={this.toResult}></div>
                    </div>
                  </div>
                </div>  : <Result totalCategories={this.props.totalCategories}></Result>}
              </section>
            );
          }
        }

