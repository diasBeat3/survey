import React from 'react';
import '../App.css';

export class Comp2 extends React.Component {
  render() {

    return (
      <section>
        <div className="col-sm-12 quest-wrapper">
            <div className="quest">
              <h3>Questão 2</h3>
              <ul>
                <li>Resposta 1</li>
                <li>Resposta 2</li>
                <li>Resposta 3</li>
                <li>Resposta 4</li>
              </ul>
            </div>
          </div>
      </section>
    );
  }
}

