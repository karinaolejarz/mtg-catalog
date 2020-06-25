import React from 'react';
import arrowup from '../photos/arrowup.png'
import ScrollToTop from 'react-scroll-up'

function ScrollTop() {
    return (
        <div>
<ScrollToTop showUnder={170} style={{right:"0em", width:"180px"}}>
  <span><img src={arrowup} style={{width:"25%",height:"25%"}}/></span>
</ScrollToTop>
</div>
    )
}

export default ScrollTop;