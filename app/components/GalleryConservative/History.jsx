import React from 'react';

class History extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column history-left-column">
          <div className="text-page-title history-title">
            history
          </div>
          <div className="paragraph-content history-contents">
            Robert Adams: The Place We Live was organized by Joshua Chuang, Assistant Curator of Photographs, and Jock Reynolds,
            the Henry J. Heinz II Director, both of the Yale University Art Gallery. The exhibition is accompanied by a three-volume
            retrospective publication of the same title, as well as the retrospective monograph What Can We Believe Where?: Photographs
            of the American West. For more information on these publications,<a href="http://artgallery.yale.edu" target="_blank"> click here</a>.
          </div>
        </div>
        <div className="text-page-right-column history-right-column">
        </div>
      </div>
    );
  }
}

export default History;