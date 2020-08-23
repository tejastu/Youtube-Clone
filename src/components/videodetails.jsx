import React from "react";

const VideoDetails = (props) => {
//   console.log(props.selectedVideo)
  if (!props.selectedVideo) { return <h1>Loading...</h1>}
  let url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
  return (
    <React.Fragment>
      <iframe src={url} width="700" height="400" frameBorder="0" allow="accelerometer; autoplay;"></iframe>
      <h1>{props.selectedVideo.snippet.title}</h1>
    </React.Fragment>
  );
};

export default VideoDetails;
