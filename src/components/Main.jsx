import React from 'react';
import '../App.css';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';
import { About } from './About';
import { Intro } from './Intro';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: {
        radio: 1,
        humana: 2,
        jorna: 3,
        teatro: 4,
      },
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
    if (this.state.total.radio++)

      console.log(this.state.total.radio)
  }

  onAddToHumana = () => {
    if (this.state.total.humana++)

      console.log(this.state.total.humana)
  }

  onAddToJorna = () => {
    if (this.state.total.jorna++)

      console.log(this.state.total.jorna)
  }

  onAddToTeatro = () => {
    if (this.state.total.teatro++)

      console.log(this.state.total.teatro)
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
            <button onClick={this.onShowAbout}>About</button>

            {this.state.showAbout ? <About></About> :
            
              <div className="col-sm-12 main-background">           
                
                <div className= "text1">
                 
                  </div>  
            <div>
                  <button onClick={this.onShowMain}>Let's start!</button>
                </div>
              </div>
            
            }
          </div>

          :


          <div className="col-sm-12 quest-wrapper">
            <Comp1 toRadio={this.onAddToRadio} toHumana={this.onAddToHumana} toTeatro={this.onAddToTeatro} toJorna={this.onAddToJorna}></Comp1>
          </div>}

      </section>
    );
  }
}

