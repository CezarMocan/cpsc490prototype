import React from 'react';

class Home extends React.Component {
  render() {
    return (
    <div>
    	<div className="col-sm-2"></div>
	    <div className="col-sm-8 home">
	        <h1 className="home-page-title"> Rethinking the Online Exhibition </h1>
	        <div className="row">
	        	<div className="col-sm-12 description">
        			<h5> Cezar Mocan | Advisor: Prof. Holly Rushmeier | <a href="/thesis/ProjectProposal.pdf" target="_blank">Proposal (PDF)</a> | <a href="/thesis/RethinkingtheOnlineExhibit.pdf" target="_blank">Thesis (PDF)</a> </h5>
	        	</div>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/earlyExperiment" target="_blank">#1—Early Experiment</a> </h4>
	        	<img className="col-sm-12" src="../img/gifs/early_experiment.gif"/>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/testApp2/about" target="_blank">#2—Webcam Image Rotation + Navigation</a> </h4>
	        	<img className="col-sm-12" src="../img/gifs/webcam_navigation_solo.gif"/>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/testApp1/about" target="_blank">#3—Webcam Image Rotation + Pixels</a> </h4>
	        	<img className="col-sm-12" src="../img/gifs/pixels_3_users.gif"/>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> Bonus </h4>
	        	<img className="col-sm-12" src="../img/gifs/user_increase_cropped.gif"/>
	        </div>
	    </div>
	    <div className="col-sm-2"></div>
    </div>
    );
  }
}

export default Home;