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
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Q5</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toRadio}>Irrevente, livre, sem medo de desafios;</li>
                  <li onClick={this.props.toTeatro}>Autónomo(a), responsável, consciente;</li>
                  <li onClick={this.props.toJorna}>Radical, subversivo(a), em constante aprendizagem;</li>
                  <li onClick={this.props.toHumana}>Resposta 4</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
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

