import React, { useState } from "react";

const Header = ({video, commentState, setComState }) => {
  // console.log("Comments")
  const [upVotes, setUpVotes] = useState( video.upvotes );
  const [downVotes, setDownVotes] = useState( video.downvotes );

  const comState = commentState ? "Hide Comments" : "Show Comments";

  return(
    <div>
      <div>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
      </div>
      <div>
        <button onClick={() => setUpVotes(upVotes + 1)}>{upVotes} 👍 </button>
        <button onClick={() => setDownVotes(downVotes - 1)}>{downVotes} 👎 </button>
      </div>
      <div>
        <button onClick={setComState}>{comState}</button>
      </div>
    </div>
  );
}

export default Header;