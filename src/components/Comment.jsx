import React, { useReducer, useState } from "react";
import CommentCard from "./CommentCard";
import Form from "./Form";

const Comment = ({ comment }) => {
  useReducer(repliesReducer, []);
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [replies, updateReplies] = useState(comment.replies);

  console.log("reply votes", replies[0].votes);

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
                <CommentCard votes={reply.votes} type="reply">
                  {reply.reply}
                </CommentCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
