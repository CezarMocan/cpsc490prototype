import React from 'react';

class About extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="text-page-container about-container">
        <div className="text-page-left-column about-left-column">
          <div className="text-page-title about-title">
            about the exhibition
          </div>
          <div className="paragraph-content about-contents">
            Organized by the <a href="http://artgallery.yale.edu" target="_blank">Yale University Art Gallery</a>, Robert Adams: The Place We Live, A Retrospective Selection of Photographs
            features over three hundred prints from the Gallery’s master sets of the photographer’s work, along with an array of his
            monographs. The exhibition traces Adams’s deep engagement with the geography of the American West, weaving together various
            aspects of over four decades of work into a cohesive, epic narrative of the American experience.
            <br/><br/>
            Each of the photographer’s major projects are represented in the exhibition, including his seminal work in the rapidly
            expanding suburbs of Colorado Springs and Denver, his elegiac portrayal of a once-verdant paradise in southern California
            choked by violence and smog, and his meditations on the promise and ruin of the Pacific Northwestern region that Adams now
            calls home. Taken as a whole, the exhibition elucidates the photographer’s civic goals: to consider the privilege of the
            place we were given and the obligations of citizenship—not only in the western United States but also, by extension,
            in the wider world.
            <br/><br/>
            Robert Adams: The Place We Live was organized by Joshua Chuang, Assistant Curator of Photographs, and Jock Reynolds,
            the Henry J. Heinz II Director, both of the Yale University Art Gallery. The exhibition is accompanied by a three-volume
            retrospective publication of the same title, as well as the retrospective monograph What Can We Believe Where?: Photographs
            of the American West. For more information on these publications,<a href="http://artgallery.yale.edu" target="_blank"> click here</a>.
          </div>
        </div>
        <div className="text-page-right-column about-right-column">
          <div className="side-element">
            <div className="section-title">
              schedule
            </div>
            <div className="side-paragraph-content">
              Mondays closed<br/>
              Tuesday—Friday: 3pm to 5pm<br/>
              Saturday—Sunday: 10am to 5pm<br/>
              <a href="http://bit.ly/1V0HJBs" target="_blank">Open now</a>
            </div>
          </div>

          <div className="side-element">
            <div className="section-title">
              location
            </div>
            <div className="side-paragraph-content">
              600 Main St, Hartford, CT 06103
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;