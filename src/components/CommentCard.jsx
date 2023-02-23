import React from "react";
import { useDispatch } from "react-redux";
import {
  upVotesComments,
  downVotesComments,
} from "../states/features/commentsSlice";
import amyrobson from "../assets/images/avatars/image-amyrobson.webp";
import iconReply from "../assets/images/icon-reply.svg";
import iconDelete from "../assets/images/icon-delete.svg";
import Button from "./Button";

const CommentCard = ({
  votes,
  type,
  children,
  commentId,
  onReplyBtnHandler,
}) => {
  const dispatchUpVotes = useDispatch();
  const dispatchDownVotes = useDispatch();

  const upVotesHandler = () => {
    dispatchUpVotes(upVotesComments(commentId));
  };

  const downVotesHandler = () => {
    dispatchDownVotes(downVotesComments(commentId));
  };

  const replyBtnHandler = () => {
    onReplyBtnHandler();
  };

  return (
    <div className="w-full rounded-lg bg-white p-4 text-grayishblue flex gap-4">
      {/* start of vote components */}
      <div className="vote text-moderateblue bg-lightgray rounded-md flex flex-col justify-between items-center h-fit">
        <button
          type="button"
          onClick={upVotesHandler}
          className="py-2 px-4 cursor-pointer"
        >
          +
        </button>
        <p className="font-bold py-2 px-4">{votes}</p>
        <button
          type="button"
          onClick={downVotesHandler}
          className="py-2 px-4 cursor-pointer"
        >
          -
        </button>
      </div>
      {/* end of vote components */}

      {/* start of comment text */}
      <div className="w-full">
        <div>
          <div className="user flex justify-between items-center">
            <div className="profile flex justify-start items-center gap-2">
              <img src={amyrobson} alt="amyrobson" width={42} />
              <span className="font-bold text-darkblue">amyrobson</span>
              <span>1 month ago</span>
            </div>
            {type !== "reply" && (
              <Button onClick={replyBtnHandler}>
                <img
                  src={iconReply}
                  style={{
                    display: "block",
                  }}
                />
                <span>Reply</span>
              </Button>
            )}

            {type === "reply" && (
              <Button onClick={replyHandler}>
                <img src={iconDelete} />
                <span className="text-softred">Delete</span>
              </Button>
            )}
          </div>
        </div>
        <p className="comment mt-4">{children}</p>
      </div>

      {/* end of comment text */}
    </div>
  );
};

export default CommentCard;
