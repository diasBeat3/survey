import React from 'react';
import '../App.css';
import { Comp10 } from "./Comp10";


export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp10: false,
      showResult: true,
    }
  }
  
  showResultRadio = () => {
    return <div>
      <div className="radio-total-wrapper">
        <div>
          Parabéns, ficaste na categoria Rádio!
          </div>
      </div> 
      </div>
  }

  showResultHumana = () => {
    return <div>
      <div className="humana-total-wrapper">
        <div>
          Parabéns, ficaste na categoria Humana!
          </div>
      </div> 
      </div>
  }

  showResultTeatro = () => {
    return <div>
      <div className="teatro-total-wrapper">
        <div>
          Parabéns, ficaste na categoria Teatro!
          </div>
      </div> 
      </div>
  }

  showResultJorna = () => {
    return <div>
      <div className="jorna-total-wrapper">
        <div>
          Parabéns, ficaste na categoria Jornal!
          </div>
      </div> 
      </div>
  }
  
  render() {
    var totalCat = this.props.totalCategories

    return (
      <section>
        <div className="col-sm-12">
            {this.state.showComp10 ? <Comp10></Comp10> : null}

            {totalCat.radio > totalCat.jorna && totalCat.radio > totalCat.teatro 
            && totalCat.radio > totalCat.humana ? this.showResultRadio() : null  }

            {totalCat.jorna > totalCat.radio && totalCat.jorna > totalCat.teatro 
            && totalCat.jorna > totalCat.humana ? this.showResultJorna() : null  }

            {totalCat.humana > totalCat.radio && totalCat.humana > totalCat.teatro 
            && totalCat.humana > totalCat.jorna ? this.showResultHumana() : null  }
            
            {totalCat.teatro > totalCat.radio && totalCat.teatro > totalCat.radio 
            && totalCat.teatro > totalCat.jorna ? this.showResultTeatro() : null  }
        </div>
      </section>
    );
  }
}

