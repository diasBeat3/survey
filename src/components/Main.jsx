import React from 'react';
import '../App.css';
import { Comp1 } from './Comp1';
import { About } from './About';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: {
        radio: 0,
        humana: 0,
        jorna: 0,
        teatro: 0,
      },
      showAbout: false,
      showMain: true,
    }
  }
  
  onAddToRadio = () => {
    this.state.total.radio++

      console.log(this.state.total.radio + ' ' + 'radio')
  }

  onAddToHumana = () => {
    this.state.total.humana++

    console.log(this.state.total.humana + ' ' + 'humana' )
  }

  onAddToJorna = () => {
    this.state.total.jorna++

    console.log(this.state.total.jorna + ' ' + 'jorna')
  }

  onAddToTeatro = () => {
    this.state.total.teatro++

    console.log(this.state.total.teatro + ' ' + 'teatro')
  }

  onShowAbout = () => {
    if (this.state.showAbout == false) {
      this.setState({
        showAbout: true
      })
    } else {
      this.setState({
        showAbout: false
      })
    }
  }

  onShowMain = () => {
    if (this.state.showMain == false) {
      this.setState({
        showMain: true
      })
    } else {
      this.setState({
        showMain: false
      })
    }
  }

  render() {
    return (
      <section>
        {this.state.showMain ?
          <div>
            {this.state.showAbout ? <About showAbout={this.onShowAbout}></About> :
            
              <div className="col-sm-12 main-background">           
                <div className= "about-button-wrapper">
                  <button onClick={this.onShowAbout}>About</button>
                </div>  
                <div>
                  <div className="btn-start-wrapper">
                    <button onClick={this.onShowMain} className="btn-start">Let's start!</button>
                  </div>
                </div>
              </div>
            
            }
          </div>
          :

          <div className="col-sm-12 quest-wrapper">
            <Comp1 
              toRadio={this.onAddToRadio} 
              toHumana={this.onAddToHumana} 
              toTeatro={this.onAddToTeatro} 
              toJorna={this.onAddToJorna}
              totalCategories={this.state.total}>
              </Comp1>
          </div>}

      </section>
    );
  }
}

