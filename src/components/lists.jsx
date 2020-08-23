import React, { Component } from "react";
import Items from "./items";

const Lists = (props) => {
   
    return (
     props.videolist.map((items) => (
      <Items videoitem={items}
             key={items.id.videoId} 
             video={props.videoData} /> )
   )); 
}

export default Lists;
