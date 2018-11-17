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
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Q9</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toRadio}>Irrevente, livre, sem medo de desafios;</li>
                  <li onClick={this.props.toJorna}>Autónomo(a), responsável, consciente;</li>
                  <li onClick={this.props.toHumana}>Radical, subversivo(a), em constante aprendizagem;</li>
                  <li onClick={this.props.toTeatro}>Resposta 4</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
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

