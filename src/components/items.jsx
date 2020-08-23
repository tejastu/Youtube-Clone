import React from "react";

const Items = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div
        className="card mb-3"
        style={{cursor:"pointer"}}
        onClick={() => props.video(props.videoitem)}
      >
        <img
          src={props.videoitem.snippet.thumbnails.high.url}
          className="card-img-top"
          alt="props.videoitem.snippet.title"
        />
        <div className="card-body">
          <h5 className="card-title">{props.videoitem.snippet.title}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Items;
