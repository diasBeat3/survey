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
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>As palavras que melhor te definem são:</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toTeatro}>Irrevente, livre, sem medo de desafios;</li>
                  <li onClick={this.props.toHumana}>Autónomo(a), responsável, consciente;</li>
                  <li onClick={this.props.toRadio}>Radical, subversivo(a), em constante aprendizagem;</li>
                  <li onClick={this.props.toJorna}>Disciplinado(a), metódico(a), preocupado(a) com o futuro.</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
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

