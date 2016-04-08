import React from 'react';

class Credits extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column credits-left-column">
          <div className="text-page-title credits-title">
            credits
          </div>
          <div className="paragraph-content credits-contents">
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
        <div className="text-page-right-column credits-right-column">
          <div className="side-element">
            <div className="section-title">
              curators
            </div>
            <div className="side-paragraph-content">
              Jennifer Ha, YUAG<br/>
              Marcus Wallace, WAMA<br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;