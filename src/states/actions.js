export function addComment(payload) {
  return {
    type: "comments/addComment",
    payload: payload,
  };
}

export function addReply(payload) {
  return {
    type: "comments/addCommentReply",
    payload: payload,
  };
}

export function upVote(payload) {
  return {
    type: "comments/upVote",
    payload: payload,
  };
}

export function downVote(payload) {
  return {
    type: "comments/downVote",
    payload: payload,
  };
}
