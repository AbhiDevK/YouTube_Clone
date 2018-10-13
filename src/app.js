import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTsearch from "youtube-api-search";
import VideoList from "./components/VideosList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.onVideoChange("lol worlds 2019");
  }

  onVideoChange = term => {
    const API_KEY = "AIzaSyCEFFKrDW4TkxcM16wEePAPMmwbVRDnk1k";
    YTsearch({ key: API_KEY, term: term }, videos => {
      this.setState(() => {
        return {
          videos: videos,
          selectedVideo: videos[0]
        };
      });
    });
  };

  render() {
    return (
      <div>
        <h1>APP</h1>
        <SearchBar onVideoChange={this.onVideoChange} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            this.setState(() => ({ selectedVideo: selectedVideo }))
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Render React Output
ReactDOM.render(
  <App /*setting some default options*/ />,
  document.querySelector(".root")
);
