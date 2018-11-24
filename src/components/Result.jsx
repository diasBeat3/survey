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
          <div className="col-sm-6 black-bar-radio"></div>
          <div className="col-sm-6">
            <div className="title-result-radio title-align-left">rádio<br></br>universidade<br></br>de coimbra</div>
          </div>
        </div>
      </div>
      <div className="col-sm-5 body-radio-text-wrapper">
        <div className="body-radio-text">
        A secção que mais se adequa a ti é RUC, Rádio Universidade Coimbra: 
        a rádio escola mais antiga do país que conta com 32 anos de existência. 
        A rádio funciona como uma cooperativa artística onde se reúnem várias pessoas sem 
        limite de idade e com diferentes backgrounds. É livre, irreverente e com espaço para o erro. 
        Aqui aprende-se a fazer rádio ao mesmo tempo que se cresce enquanto pessoa.

          </div>
      </div>
      <div className="col-sm-12 align-right-button-next-question">
        <div className="começar-bar-wrapper">
          <a className="btn-sabe-mais-wrapper link-style" href="https://www.facebook.com/RUC107.9FM/">sabe mais aqui</a>
          <a className="bar-começar" href="https://www.facebook.com/RUC107.9FM/"></a>
        </div>
      </div>
    </div>
    }

    showResultHumana = () => {
      return <div className="col-sm-12 humana-background">
      <div className="title-quest-wrapper">
        <div className="bar-title-wrapper">
          <div className="col-sm-6 black-bar-humana"></div>
          <div className="col-sm-6">

            <div className="title-result-humana title-align-left">secção de defesa<br></br>dos direitos<br></br>humanos</div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 body-humana-text-wrapper">
        <div className="body-humana-text">
        A secção que mais se adequa a ti é a Secção de Defesa dos Direitos Humanos. 
        A secção que se define como desafiante mas enriquecedora e que tem como objetivo principal 
        a denúncia das diversas violações de Direitos Humanos, através da informação, formação e educação de 
        todas as temáticas relacionadas com estes.
        É um espaço feito por estudantes e para estudantes que incentiva ao espírito crítico. 
        Quem por aqui passa, leva consigo um desenvolvimento quer a nível pessoal, quer a nível académico, 
        novas capacidades e novos contactos.
          </div>
      </div>
      <div className="col-sm-12 align-right-button-next-question">
        <div className="começar-bar-wrapper">
          <a className="btn-sabe-mais-wrapper link-style" href="https://www.facebook.com/sddhaac/">sabe mais aqui</a>
          <a className="bar-começar" href="https://www.facebook.com/sddhaac/"></a>
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
              <div className="title-result-teatro title-align-left">cícrculo de iniciação<br></br>teatral da academia<br></br>de coimbra</div>
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
        <div className="col-sm-12 align-right-button-next-question">
          <div className="começar-bar-wrapper">
            <a className="btn-sabe-mais-wrapper link-style" href="https://www.facebook.com/citacteatro/">sabe mais aqui</a>
            <a className="bar-começar" href="https://www.facebook.com/citacteatro/"></a>
          </div>
        </div>
      </div>
    }

    showResultJorna = () => {
      return <div className="col-sm-12 jorna-background">
        <div className="title-quest-wrapper">
          <div className="bar-title-wrapper">
            <div className="col-sm-5 black-bar-teatro"></div>
            <div className="col-sm-7">
              <div className="title-result-jorna title-align-left">secção de<br></br>jornalismo</div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 body-jorna-text-wrapper">
          <div className="body-jorna-text">
            A secção que mais se adequa a ti é a Secção de Jornalismo, a A Cabra.
            Este é o local certo para quem gosta do mundo do jornalismo mesmo que
            não seja a tua área de formação. Se tens apenas curiosidade e gostas de
            desenvolver capacidades noutras áreas, como fotografia e paginação,
            continua a ser o local certo.
          </div>
        </div>
        <div className="col-sm-12 align-right-button-next-question">
          <div className="começar-bar-wrapper">
            <a className="btn-sabe-mais-wrapper link-style" href="https://www.facebook.com/jornalacabra/">sabe mais aqui</a>
            <a className="bar-começar" href="https://www.facebook.com/jornalacabra/"></a>
          </div>
        </div>
      </div>
    }

    render() {
      var totalCat = this.props.totalCategories

      return (
        <section>
          <div className="col-sm-12">
            {/* {this.state.showResult ? <Comp10></Comp10> : null} */}

            {totalCat.radio > totalCat.jorna && totalCat.radio > totalCat.teatro
              && totalCat.radio > totalCat.humana ? this.showResultRadio() : null}

            {totalCat.jorna > totalCat.radio && totalCat.jorna > totalCat.teatro
              && totalCat.jorna > totalCat.humana ? this.showResultJorna() : null}

            {totalCat.humana > totalCat.radio && totalCat.humana > totalCat.teatro
              && totalCat.humana > totalCat.jorna ? this.showResultHumana() : null}

            {totalCat.teatro > totalCat.radio && totalCat.teatro > totalCat.radio
              && totalCat.teatro > totalCat.jorna ? this.showResultTeatro() : null}
          </div>
        </section>
      );
    }
  }

