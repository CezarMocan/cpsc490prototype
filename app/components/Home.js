import React from 'react';

class Home extends React.Component {
  render() {
    return (
    <div>
    	<div className="col-sm-2"></div>
	    <div className="col-sm-8 home">
	        <h1 className="home-page-title"> Rethinking the Online Exhibition </h1>
	        <div className="row first">
	        	<div className="col-sm-12 description">
        			<h5> Cezar Mocan | Advisor: Prof. Holly Rushmeier | <a href="/thesis/ProjectProposal.pdf" target="_blank">Proposal (PDF)</a> | <a href="/thesis/RethinkingtheOnlineExhibit.pdf" target="_blank">Thesis (PDF)</a> </h5>
	        	</div>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/earlyExperiment" target="_blank">1. Early Experiment</a> </h4>
	        	<div className="col-sm-12 vertical-padding"> The research phase of the project proved extremely useful in seeing and understanding
	        	the different types of interactions used by existing online exhibitions and paved the way to an important question:
	        	How can two different designs be compared? The design of each exhibition reflects to a certain extent the contents
	        	of the showcased collection, and we were interested in understanding what type of UX design would suit the objects
	        	we were working with best. As a result, we decided to recreate five of the exhibitions analyzed in the research
	        	phase using the objects in our collection. Keeping a constant element on the page—the exhibition subject in our case—allows
	        	for a much easier comparison of the different designs and how they influence the user’s perception. <br/>
				For each of the websites, we only re-created the page displaying the objects of the collection, and appropriated
				the user actions related to 1) interacting with an object and 2) moving through the collection.
				The contextual information pages were not of interest for our question. </div>
				<a href="/earlyExperiment" target="_blank">
	        		<img className="col-sm-12 vertical-padding" src="../img/gifs/early_experiment.gif"/>
	        	</a>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/testApp2/about" target="_blank">2. Webcam Image Rotation + Navigation</a> </h4>
	        	<div className="col-sm-12 vertical-padding">
					We decided to present the objects in a 360° view, using 18 photos for each object—roughly one per 20° turn of the object. As we were not in the possession of such photographs for our bronze statues, we used placeholder objects, as a proof of concept. Going further with this idea, we tried finding the most natural type of user interaction for rotating the sculptures, as we were not content with the click & drag approach used by websites with a similar presentation of the objects. We found our response in the web camera and a face tracking library, and decided that the rotation of the objects would be directed by the user’s head movement in front of the computer screen.<br/>
					The use of the webcam opened up a new possibility: a new type of website navigation, different than the traditional mouse-click approach. We ended up implementing navigation based on head position in this prototype.
					Mouse navigation is also possible, by using the top navigation bar, or by clicking the sequential navigation circle at on the right of the page. <br/>
				</div>
				<a href="/testApp2/about" target="_blank">
	        		<img className="col-sm-12 vertical-padding" src="../img/gifs/webcam_navigation_solo.gif"/>
	        	</a>
	        </div>
	        <div className="row">
	        	<h4 className="col-sm-12"> <a href="/testApp1/about" target="_blank">3. Webcam Image Rotation + Pixels</a> </h4>
	        	<div className="col-sm-12 vertical-padding">
					One characteristic borrowed from the physical exhibition takes the form of the exhibition as collective experience. Briefly, we wanted to make visitors aware of the fact that they are not alone in their visit, so a visitor is able to see screen traces of the relative position of his own face with respect to his webcam, as well as the face positions of all the other visitors present on the website. You can see in the GIF below the traces left by 3 users on the pages. Both prototypes #2 and #3 implement this strategy (even though it's not visible in the GIF presentation of #2, try it out with a friend!)
	        	</div>

	        	<a href="/testApp1/about" target="_blank">
	        		<img className="col-sm-12 vertical-padding" src="../img/gifs/pixels_3_users.gif"/>
	        	</a>
	        </div>
	        <div className="row last">
	        	<h4 className="col-sm-12">4. Bonus </h4>
	        	<div className="col-sm-12 vertical-padding">
					Ephemerality was the first concept we became interested in introducing into our exhibition. We seeked a creative way of making our website disappear after a period of time, in order to emulate the existence in time of a physical exhibition. The process we came up with was a simple one: every time a visitor accesses the exhibition page, an active pixel of the page becomes dead—it is rendered as a black pixel. This way, the exhibition will gradually fade away in time, visitor after visitor. You can see in the image below what the exhibition would look like after 10000, 20000, 50000, 100000, 200000, 300000, 500000, 1000000, 2000000, 3000000, 4000000 and 5000000 visits.
				</div>
	        	<img className="col-sm-12 vertical-padding" src="../img/gifs/user_increase_cropped.gif"/>
	        </div>
	    </div>
	    <div className="col-sm-2"></div>
    </div>
    );
  }
}

export default Home;