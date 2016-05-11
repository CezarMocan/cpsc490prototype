import React from 'react';

class Home extends React.Component {
  render() {
    return (
    <div className="col-sm-12 home">
        <h1 className="home-page-title"> Cezar Mocan—CPSC 490—Prototypes </h1>
        <h3> <a href="/earlyExperiment">#1—Early Experiment</a> </h3>
        <h3> <a href="/testApp1/about">#2—Webcam Image Rotation + Pixels</a> </h3>
        <h3> <a href="/testApp2/about">#3—Webcam Image Rotation + Navigation</a> </h3>
    </div>
    );
  }
}

export default Home;