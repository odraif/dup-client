import React from 'react';
import TV from "./digital_home.mp4"

const Backv = () => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${TV}"
          class="home_Video dont-print"
        />,
      ` }}></div>
        </div>
    );
}

export default Backv;
