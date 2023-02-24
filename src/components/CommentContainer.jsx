import React, { useState } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { addReply } from "../states/features/commentsSlice";
import CommentCard from "./CommentCard";
import Form from "./Form";

const CommentContainer = ({ comment }) => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const dispatchReply = useDispatch();

  const replyHandler = () => {
    setReplyIsOpen(!replyIsOpen);
  };

  const onAddReply = (newComment) => {
    const generateId = uniqid();
    dispatchReply(
      addReply({
        commentId: comment.id,
        replyId: generateId,
        text: newComment,
        votes: 0,
      })
    );
  };

  const votesHandler = () => {
    votesHandler();
  };

  return (
    <div id={comment.id} className="grid gap-4">
      <CommentCard
        commentId={comment.id}
        votes={comment.votes}
        type="comment"
        onReplyBtnHandler={replyHandler}
      >
        {comment.text}
      </CommentCard>

      <div className="reply-container flex w-full">
        <div className="h-auto vertical-line"></div>
        <ul className="w-full grid gap-4">
          {replyIsOpen && (
            <Form placeholder={"Add a reply..."} onSubmit={onAddReply} />
          )}
          {/* {reply.map((reply, index) => (
            <li key={index}>
              <CommentCard
                votes={reply.votes}
                onVotes={votesHandler}
                type="reply"
              >
                {reply.text}
              </CommentCard>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default CommentContainer;
