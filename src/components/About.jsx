import React from 'react';
import '../App.css';

export class About extends React.Component {

  render() {

    return (
      <section>
        <div className="about-background">
          <button className="btn-close" onClick={this.props.showAbout}>Close</button>
          <div>
            About
          </div>
        </div>
      </section>
    );
  }
}

