import React from 'react';
import '../App.css';
import { Comp6 } from "./Comp6";
import { Comp8 } from "./Comp8";


export class Comp7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp6: false,
      showComp7: true,
      showComp8: false,
    }
  }

  nextPage = () => {
    this.setState({
      showComp6: false,
      showComp7: false,
      showComp8: true
    })
  }

  render() {

    return (
      <section>
        {this.state.showComp6 ? <Comp6></Comp6> : null}

        {this.state.showComp7 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Qual dos seguintes nomes conheces:</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toJorna}>Mário Lopes</li>
                  <li onClick={this.props.toHumana}>Joacine Katar Moreira</li>
                  <li onClick={this.props.toRadio}>Isilda Sanches</li>
                  <li onClick={this.props.toTeatro}>Custódia Gallego</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}

        {this.state.showComp8 ? 
          <Comp8 
            toRadio={this.props.toRadio} 
            toJorna={this.props.toJorna} 
            toHumana={this.props.toHumana} 
            toTeatro={this.props.toTeatro}
            totalCategories={this.props.totalCategories}>
          </Comp8> : null}
      </section>
    );
  }
}

