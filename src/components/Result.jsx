    import React from 'react';
    import '../App.css';
    import { Comp10 } from "./Comp10";


    export class Result extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showComp10: false,
          showResult: true,
        }
      }
      
      showResultRadio = () => {
        return <div className="col-sm-12 radio-background">
              <div className="title-quest-wrapper">
                <div className="bar-title-wrapper">
                  <div className="col-sm-8 black-bar-3"></div>
                  <div className="col-sm-4">
                    <div className="title-answer-3 title-align-left">qual é<br></br>a tua maior<br></br>fraqueza?</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                A secção que mais se adequa a ti é o CITAC, Círculo de
                Iniciação Teatral da Academia de Coimbra.
                O CITAC assume-se como experimental, em constante
                renovação resistindo a moldes pré-concebidos. Ganhou
                destaque pela sua resistência ao fascismo, tendo sido o
                grupo até perseguido e fechado pela PIDE. É um espaço para
                pessoas interessadas em fazer teatro e em experimentar o 
                crescimento pessoal através da arte.
              </div>
        </div>
      }

      showResultHumana = () => {
        return <div>
          <div className="humana-total-wrapper">
            <div>
              Parabéns, ficaste na categoria Humana!
              </div>
          </div> 
          </div>
      }

      showResultTeatro = () => {
        return <div className="col-sm-12 teatro-background">
        <div className="title-quest-wrapper">
          <div className="bar-title-wrapper">
            <div className="col-sm-5 black-bar-teatro"></div>
            <div className="col-sm-7">
              <div className="title-answer-3 title-align-left">qual é<br></br>a tua maior<br></br>fraqueza?</div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 body-teatro-text-wrapper">
          <div className="body-teatro-text">
            A secção que mais se adequa a ti é o CITAC, Círculo de
            Iniciação Teatral da Academia de Coimbra.
            O CITAC assume-se como experimental, em constante
            renovação resistindo a moldes pré-concebidos. Ganhou
            destaque pela sua resistência ao fascismo, tendo sido o
            grupo até perseguido e fechado pela PIDE. É um espaço para
            pessoas interessadas em fazer teatro e em experimentar o 
            crescimento pessoal através da arte.
          </div>
        </div>
        </div>
      }

      showResultJorna = () => {
        return <div>
          <div className="jorna-total-wrapper">
            <div>
              Parabéns, ficaste na categoria Jornal!
              </div>
          </div> 
          </div>
      }
      
      render() {
        var totalCat = this.props.totalCategories

        return (
          <section>
            <div className="col-sm-12">
                {this.state.showComp10 ? <Comp10></Comp10> : null}

                {totalCat.radio > totalCat.jorna && totalCat.radio > totalCat.teatro 
                && totalCat.radio > totalCat.humana ? this.showResultRadio() : null  }

                {totalCat.jorna > totalCat.radio && totalCat.jorna > totalCat.teatro 
                && totalCat.jorna > totalCat.humana ? this.showResultJorna() : null  }

                {totalCat.humana > totalCat.radio && totalCat.humana > totalCat.teatro 
                && totalCat.humana > totalCat.jorna ? this.showResultHumana() : null  }
                
                {totalCat.teatro > totalCat.radio && totalCat.teatro > totalCat.radio 
                && totalCat.teatro > totalCat.jorna ? this.showResultTeatro() : null  }
            </div>
          </section>
        );
      }
    }

