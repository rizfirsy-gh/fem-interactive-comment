import React, { useState } from "react";
import CommentCard from "./CommentCard";
import Form from "./Form";

const Comment = ({ comment }) => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);

  const replyHandler = () => {
    setReplyIsOpen(!replyIsOpen);
  };

  return (
    <div id={comment.id} className="grid gap-4">
      <CommentCard votes={comment.votes} type="comment" onReply={replyHandler}>
        {comment.text}
      </CommentCard>

      <div className="reply-container flex w-full">
        <div className="h-auto vertical-line"></div>
        <ul className="w-full grid gap-4">
          {replyIsOpen && <Form placeholder={"Add a reply..."} />}
          {comment.replies.length > 0 &&
            comment.replies.map((reply, index) => (
              <li key={index}>
                <CommentCard votes={reply.votes} type="reply">
                  {reply.text}
                </CommentCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
