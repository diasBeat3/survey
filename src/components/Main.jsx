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
            
              // <div className="col-sm-12 main-background">           
              //   <div className= "about-button-wrapper">
              //     <button onClick={this.onShowAbout}>About</button>
              //   </div>  
              //   <div>
              //     <div className="btn-start-wrapper">
              //       <button onClick={this.onShowMain} className="btn-start">Let's start!</button>
              //     </div>
              //   </div>
              // </div>

              <div className="col-sm-12 main-background">
                <div className="col-sm-12 bar-title-wrapper">
                  <div className="col-sm-5 black-bar">
                  </div> 
                  <div className="col-sm-7 title-main-wrapper">
                    <div className="title-main-1">os teus amigos dizem<br></br>que és um "drama queen"?</div>
                    {/* <h2 className="title-main-2">que és um "drama queen"?</h2> */}
                  </div>
                </div>
                <div className="col-sm-12 sub-title-wrapper">
                  <div className="sub-title">
                    gostas de cantar mas todos te acham <br></br> uma cana rachada?
                  </div>
                </div>
                <div className="col-sm-12 text-body-wrapper">
                    <div className="col-sm-5 text-body">
                      Tens algum tempo livre e gostarias de o ocupar de forma útil mas não
                      sabes como nem onde? Já conheces as secções culturais da AAC? São
                      16 secções que te dão a conhecer mundos novos como o da rádio, do 
                      jornalismo, da televisão, do cinema, da escrita, entre outros.
                      Respondendo a este questionário de 10 perguntas ficarás a saber qual
                      a secção que mais se adequa a ti.
                    </div>
                </div>
                <div className="col-sm-12 buttons-wrapper">
                    <div>
                      <button onClick={this.onShowAbout}>About</button>
                    </div>
                    <div className="começar-bar-wrapper">
                      <div onClick={this.onShowMain} className="btn-start-wrapper">começar</div>
                      <div onClick={this.onShowMain} className="bar-começar"></div>
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

