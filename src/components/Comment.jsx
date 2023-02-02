import React, { useReducer, useState } from "react";
import CommentCard from "./CommentCard";
import Form from "./Form";

function repliesReducer() {}

// {
//   "id": ":r2:",
//   "votes": 0,
//   "content": "lorem ipsum comment comment kek di yutb gitu gitu lah",
//   "replies": [
//       {
//           "id": ":r3:",
//           "votes": 0,
//           "reply": "lorem ipsum reply replyan",
//           "replies": []
//       }
//   ]
// }

const Comment = ({ comment }) => {
  console.log("comment :>> ", comment);
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [replies, updateReplies] = useReducer(repliesReducer, comment.replies);

  const replyHandler = (reply) => {
    setReplyIsOpen(reply);
  };

  return (
    <div id={comment.id} className="grid gap-4">
      <CommentCard votes={comment.votes} type="comment" onReply={replyHandler}>
        {comment.content}
      </CommentCard>

      {replyIsOpen && <Form placeholder={"Add a reply..."} />}
      <div className="reply-container flex w-full">
        <div className="h-auto vertical-line"></div>
        <ul className="w-full grid gap-4">
          {replies &&
            replies.map((reply, index) => (
              <li key={index}>
                <CommentCard type="reply">{reply.reply}</CommentCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
