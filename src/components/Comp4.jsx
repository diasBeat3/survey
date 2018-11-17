import React from 'react';
import '../App.css';
import { Comp3 } from "./Comp3";
import { Comp5 } from "./Comp5";

export class Comp4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp3: false,
      showComp4: true,
      showComp5: false,
    }
  }
  
  nextPage = () => {
    this.setState({
      showComp3: false,
      showComp4: false,
      showComp5: true
    })
  }

  render() {

    return (
      <section>
        {this.state.showComp ? <Comp3></Comp3> : null}

        {this.state.showComp4 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Aquilo que mais te incomoda são:</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toHumana}>Pessoas mal-educadas.</li>
                  <li onClick={this.props.toRadio}>Demasiadas regras.</li>
                  <li onClick={this.props.toJorna}>Procrastinadores.</li>
                  <li onClick={this.props.toTeatro}>Pessoas desleais.</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}

        {this.state.showComp5 ? 
        <Comp5 
          toRadio={this.props.toRadio} 
          toJorna={this.props.toJorna} 
          toHumana={this.props.toHumana} 
          toTeatro={this.props.toTeatro}
          totalCategories={this.props.totalCategories}>
        </Comp5> : null}
      </section>
    );
  }
}

