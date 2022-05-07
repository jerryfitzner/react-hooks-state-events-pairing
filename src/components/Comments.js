import React, { useState } from "react";

const Comments = ({comments}) => {
  // console.log(comments.length)
  const commentAdd = comments.map((comment) => (
    <div key={comment.user}>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
    </div>
  ))

  return(
    <div>
      <h3>{comments.length} Comments</h3>
      {commentAdd}
    </div>
  )
}

export default Comments;