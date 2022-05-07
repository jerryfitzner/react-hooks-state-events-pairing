import video from "../data/video.js";
import React, { useState } from "react";
import Header from "./Header";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const [hideComment, setHideComment] = useState(true);

  const commented = hideComment ? <Comments comments={video.comments}/> : null;

  const setComState = () => {
    const truthy = hideComment ? false : true;
    setHideComment(truthy);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <Header video={video} commentState={hideComment} setComState={setComState}/>
      {commented}
    </div>
  );
}

export default App;
