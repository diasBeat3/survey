import React from 'react';
import '../App.css';
import { Comp7 } from "./Comp7";
import { Comp9 } from "./Comp9";


export class Comp8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp7: false,
      showComp8: true,
      showComp9: false,
    }
  }

  nextPage = () => {
    this.setState({
      showComp7: false,
      showComp8: false,
      showComp9: true
    })
  }

  render() {

    return (
      <section>
        {this.state.showComp7 ? <Comp7></Comp7> : null}

        {this.state.showComp8 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Escolhe um hobby:</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toRadio}>Jardinagem.</li>
                  <li onClick={this.props.toJorna}>Fazer crochet.</li>
                  <li onClick={this.props.toHumana}>Pintura.</li>
                  <li onClick={this.props.toTeatro}>Yoga.</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}

        {this.state.showComp9 ? 
        <Comp9
          toRadio={this.props.toRadio} 
          toJorna={this.props.toJorna} 
          toHumana={this.props.toHumana} 
          toTeatro={this.props.toTeatro}
          totalCategories={this.props.totalCategories}>
        </Comp9> : null}
      </section>
    );
  }
}

