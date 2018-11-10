import React from 'react';
import '../App.css';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: {
          radio: 1,
          cinema: 2,
          musica: 3,
          arte: 4,
        },
        total: {
          radio: 0,
          cinema: 0,
          musica: 0,
          arte: 0,
        },
        on: false,
    }
  }   

  onAddToRadio = () => {
    this.state.total.radio++;
    
    console.log(this.state.total.radio)
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })

  }

  selectedQuestion = () => {
    
  }
  
  nextPage = () => {
    // this.setState({
    //   on: !this.state.on
    // })

  }

  render() {
    
    var question = this.state.questions[0]

    return (
      <section>
        <div className="col-sm-12 quest-wrapper">
            <div className="quest">
              <h3>{question}</h3>
              {/* <ul>
                <li onClick={this.onAddToRadio} id="radio">Resposta 1</li>
                <li>Resposta 2</li>
                <li>Resposta 3</li>
                <li>Resposta 4</li>
              </ul> */}
              <button onClick={this.nextPage}>></button>
            </div>
          </div>
      </section>
    );
  }
}

