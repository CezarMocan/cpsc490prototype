import React from 'react';

import { TransitionMotion, spring } from 'react-motion';

const SpringModel = { stiffness: 80, damping: 15, precision: 0.05 };

const RouteTransition = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    height: React.PropTypes.number.isRequired
  },
  willEnter() {
    return { opacity: 0.15 };
  },
  willLeave() {
    return { opacity: spring(1, SpringModel) };
  },
  getStyles() {
    const { id, children } = this.props;
    return [{
      key: id,
      style: { opacity: spring(1, SpringModel) },
      data: { children }
    }];
  },
  render() {
    const { height } = this.props;
    return (
      <TransitionMotion
        styles={ this.getStyles }
        willEnter={ this.willEnter }
        willLeave={ this.willLeave }>
        { values =>
          <div style={{ height }}>
            { values.map(({ key, style, data }) =>
              <div
                key={ key }
                style={{
                  height,
                  opacity: style.opacity
                }}>
               { data.children }
             </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
});

export default RouteTransition;