import React, { Component } from "react";
import Searchbar from "./components/searchbar";
import axios from "axios";
import Lists from "./components/lists";
import VideoDetails from "./components/videodetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      videoDetails: null,
    };
  }

  componentDidMount() {
    this.fetchSearchInputdata("Pubg");
  }

  fetchSearchInputdata = async (data) => {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: data,
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: "AIzaSyCes6Hxb0UwpkFy6Exziz0YiH8-gMOpy2o",
        },
      }
    );
    console.log(response);
    this.setState({ videos: response.data.items }); // we can get any info about video from here videos
    this.setState({ videoDetails: response.data.items[0] });
  };

  fetchSelectedVideoData = (data) => {
    // console.log(data);
    this.setState({ videoDetails: data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Searchbar inputData={this.fetchSearchInputdata} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <VideoDetails selectedVideo={this.state.videoDetails} />
            </div>
            <div className="col-md-4">
              <Lists
                videolist={this.state.videos}
                videoData={this.fetchSelectedVideoData}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
