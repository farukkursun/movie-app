import React from "react";

const VideoSections = ({videoKey}) => {
  return (<div className="text-center video">
    <div className="embed-responsive embed-responsive-16by9" >
      <iframe
        className="embed-responsive-item video w-50 "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title='youtube video'
     
      ></iframe>
    </div>
    </div>
  );
};

export default VideoSections;
