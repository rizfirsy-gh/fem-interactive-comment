import React, { useReducer, useState } from "react";
import CommentCard from "./CommentCard";
import Form from "./Form";

function repliesReducer() {}

const Comment = () => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [replies, updateReplies] = useReducer(repliesReducer, [
    {
      votes: 0,
      reply: "lorem ipsum reply replyan",
      replies: [],
    },
    {
      votes: 0,
      reply: "lorem ipsum reply replyan",
      replies: [],
    },
  ]);

  const replyHandler = (reply) => {
    setReplyIsOpen(reply);
  };

  return (
    <div className="grid gap-4">
      <CommentCard onReply={replyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        quam vero molestiae repudiandae dolore obcaecati odit, exercitationem.
      </CommentCard>

      {replyIsOpen && <Form placeholder={"Add a reply..."} />}
      <div className="reply-container flex w-full">
        <div className="h-auto vertical-line"></div>
        <ul className="w-full grid gap-4">
          {replies &&
            replies.map((reply, index) => (
              <li key={index}>
                <CommentCard>{reply.reply}</CommentCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
