import React from 'react';
import '../App.css';
import { Comp5 } from "./Comp5";
import { Comp7 } from "./Comp7";


export class Comp6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp5: false,
      showComp6: true,
      showComp7: false,
    }
  }
  
  nextPage = () => {
    this.setState({
      showComp5: false,
      showComp6: false,
      showComp7: true
    })
  }

  render() {

    return (
      <section>
        {this.state.showComp5 ? <Comp5></Comp5> : null}

        {this.state.showComp6 ?
          <div className="quest section-background-comp2">
            <div className="title-quest-wrapper">
              <div className="title-wrapper">
                <h3>Aquilo que não pode faltar no teu dia é:</h3>
              </div>
              <div className="quest-wrapper">
                <ul>
                  <li onClick={this.props.toHumana}>Café.</li>
                  <li onClick={this.props.toTeatro}>Uma caminhada de 30min.</li>
                  <li onClick={this.props.toRadio}>Ouvir música.</li>
                  <li onClick={this.props.toJorna}>Ler um livro ou um jornal.</li>
                </ul>
              </div>
            </div>
            <div className="align-right">
              <button onClick={this.nextPage}>Próxima questão</button>
            </div>
          </div> : null}

        {this.state.showComp7 ? 
        <Comp7 
          toRadio={this.props.toRadio} 
          toJorna={this.props.toJorna} 
          toHumana={this.props.toHumana} 
          toTeatro={this.props.toTeatro}
          totalCategories={this.props.totalCategories}>
        </Comp7> : null}
      </section>
    );
  }
}

