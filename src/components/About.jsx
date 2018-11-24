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
                          <div className="col-sm-7 text-body-about">
                          Este projeto foi desenvolvido na unidade curricular de “Oficina de Design de Comunicação”.
Numa primeira fase foi pedido para identificar um problema que afectasse a comunidade da Universidade de Coimbra e, 
numa segunda, o desenvolvimento de um protótipo funcional que demonstre a eficácia comunicacional para combater o 
problema identificado. Neste caso específico, tratou-se o tema das secções culturais da Associação Académica de Coimbra: 
a fraca divulgação destas e o trabalho desenvolvido por elas não ser conhecido.
O objetivo final deste projecto é, com a divulgação das secções culturais da AAC, 
tentar traduzi-la num maior número de interessados(as) nas mesmas.
                          </div>
                      </div>
                    </div> 
            </section>
          );
        }
      }

