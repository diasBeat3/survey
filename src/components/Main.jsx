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

              <div className="col-sm-12 main-background main-background-mobile">
                
                <div className="col-sm-12 bar-title-wrapper">
                  <div className="col-sm-5 black-bar">
                    </div>
                    <div className="col-sm-7 title-main-wrapper title-main-wrapper-mobile">
                      <div className="title-main-1 title-main-1-mobile">os teus amigos dizem<br></br>que és um "drama queen"?</div>
                   </div>
                </div>

                <div className="col-sm-12 bar-title-wrapper-mobile">
                  <div className="col-sm-7 title-main-wrapper title-main-wrapper-mobile">
                    <div className="title-main-1 title-main-1-mobile">os teus amigos dizem que és um "drama queen"?</div>
                  </div>
                </div>
                <div className="black-bar-mobile">
                </div>

                <div className="col-sm-12">
                  <div className="sub-title sub-title-mobile">
                    gostas de cantar mas todos te acham <br></br> uma cana rachada?
                  </div>
                </div>
                <div className="col-sm-12 text-body-wrapper text-body-wrapper-mobile">
                    <div className="col-sm-5 text-body text-body-mobile">
                      Tens algum tempo livre e gostarias de o ocupar de forma útil mas não
                      sabes como nem onde? Já conheces as secções culturais da AAC? São
                      16 secções que te dão a conhecer mundos novos como o da rádio, do 
                      jornalismo, da televisão, do cinema, da escrita, entre outros.
                      Respondendo a este questionário de 10 perguntas ficarás a saber qual
                      a secção que mais se adequa a ti.
                    </div>
                </div>
                <div className="col-sm-12 buttons-wrapper">
                    <div className="about-bar-wrapper about-bar-wrapper-mobile">
                      <div className="bar-começar bar-começar-mobile" onClick={this.onShowAbout}></div>
                      <div className="btn-about-wrapper btn-about-wrapper-mobile" onClick={this.onShowAbout}>about</div>
                    </div>
                    <div className="começar-bar-wrapper começar-bar-wrapper-mobile">
                      <div className="btn-start-wrapper btn-start-wrapper-mobile" onClick={this.onShowMain}>começar</div>
                      <div className="bar-começar bar-começar-mobile" onClick={this.onShowMain}></div>
                    </div>
                </div>

                <div className="col-sm-12 buttons-wrapper-mobile">
                    <div className="col-sm-12 about-bar-wrapper-mobile">
                      <div className="bar-começar-mobile" onClick={this.onShowAbout}></div>
                      <div className="btn-about-wrapper-mobile" onClick={this.onShowAbout}>about</div>
                    </div>
                </div>

                <div className="col-sm-12 buttons-wrapper-mobile">
                    <div className="col-sm-12 começar-bar-wrapper-mobile">
                      <div className="btn-start-wrapper-mobile" onClick={this.onShowMain}>começar</div>
                      <div className="bar-começar-mobile" onClick={this.onShowMain}></div>
                    </div>
                  </div>
              </div>            
            }
          </div>
          :

          <div className="col-sm-12 quest-wrapper quest-wrapper-mobile">
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

