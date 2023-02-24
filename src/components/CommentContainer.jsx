import React, { useState } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { addReply } from "../states/features/commentsSlice";
import CommentCard from "./CommentCard";
import ReplyForm from "./ReplyForm";
import ReplyCard from "./ReplyCard";

const CommentContainer = ({ comment }) => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const dispatchReply = useDispatch();

  const replyHandler = () => {
    setReplyIsOpen(!replyIsOpen);
  };

  const onAddReply = (replyText) => {
    const generateId = uniqid();
    console.log("generateId", generateId);
    dispatchReply(
      addReply({
        commentId: comment.id,
        replyId: generateId,
        text: replyText,
        votes: 0,
      })
    );
  };

  const votesHandler = () => {
    votesHandler();
  };

  // comment.replies.map((reply) => console.log("reply", reply.text));

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
          //TODO: render list of reply
          {comment.replies.map((reply, index) => {
            console.log("reply.replyId", reply.replyId);
            <li key={reply.replyId}>
              <ReplyCard
                replyId={reply.replyId}
                votes={reply.votes}
                commentId={comment.id}
              >
                {reply.text}
              </ReplyCard>
            </li>;
          })}
          {replyIsOpen && (
            <ReplyForm placeholder={"Add a reply..."} onSubmit={onAddReply} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommentContainer;
