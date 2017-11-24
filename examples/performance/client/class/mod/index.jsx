

import React from 'react';
import RecursiveDivs from './RecursiveDivs';
import CachebleDivs from './CachebleDivs';

class Index extends React.Component {
  render() {
    return (
      <div>
        <RecursiveDivs depth={3} breadth={10} />
        <RecursiveDivs depth={3} breadth={10} />
        <CachebleDivs depth={3} breadth={10} />
      </div>
    );
  }
}
export default Index;
