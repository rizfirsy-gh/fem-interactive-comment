import React from "react";
import { useDispatch } from "react-redux";
import { upVotesReply, downVotesReply } from "../states/features/commentsSlice";
import Button from "./Button";
import iconDelete from "../assets/images/icon-delete.svg";
import juliusomo from "../assets/images/avatars/image-juliusomo.png";

const ReplyCard = ({ votes, children, replyId, commentId }) => {
  const dispatchUpVotes = useDispatch();
  const dispatchDownVotes = useDispatch();

  const upVotesHandler = () => {
    dispatchUpVotes(upVotesReply(commentId, replyId));
  };

  const downVotesHandler = () => {};

  const deleteReply = () => {
    onReplyBtnHandler();
  };

  return (
    <div
      id={replyId}
      className="w-full rounded-lg bg-white p-4 text-grayishblue flex gap-4"
    >
      {/* start of vote */}
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
      {/* end of vote */}

      {/* start of reply text */}
      <div className="w-full">
        <div>
          <div className="user flex justify-between items-center">
            <div className="profile flex justify-start items-center gap-2">
              <img src={juliusomo} alt="amyrobson" width={42} />
              <span className="font-bold text-darkblue">amyrobson</span>
              <span>1 month ago</span>
            </div>

            <Button onClick={deleteReply}>
              <img src={iconDelete} />
              <span className="text-softred">Delete</span>
            </Button>
          </div>
        </div>
        <p className="comment mt-4">{children}</p>
      </div>

      {/* end of comment text */}
    </div>
  );
};

export default ReplyCard;
