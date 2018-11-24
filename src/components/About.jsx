      import React from 'react';
      import '../App.css';

      export class About extends React.Component {

        render() {

          return (
            <section>
                <div className="col-sm-12 about-background">
                <div className="about-button-wrapper">
                <button type="button" class="close" aria-label="Close" onClick={this.props.showAbout}>
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
                      <div className="col-sm-12 bar-title-wrapper">
                        <div className="col-sm-5 black-bar">
                        </div> 
                        <div className="col-sm-7 title-about-wrapper">
                          <div className="title-about">sobre este projecto</div>
                        </div>
                      </div>
                      <div className="col-sm-12 text-body-about-wrapper">
                          <div className="col-sm-5 text-body-about">
                            Tens algum tempo livre e gostarias de o ocupar de forma útil mas não
                            sabes como nem onde? Já conheces as secções culturais da AAC? São
                            16 secções que te dão a conhecer mundos novos como o da rádio, do 
                            jornalismo, da televisão, do cinema, da escrita, entre outros.
                            Respondendo a este questionário de 10 perguntas ficarás a saber qual
                            a secção que mais se adequa a ti.
                          </div>
                      </div>
                    </div> 
            </section>
          );
        }
      }

