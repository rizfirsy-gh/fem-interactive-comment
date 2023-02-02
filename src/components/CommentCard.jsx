import React, { useState, useReducer } from "react";
import amyrobson from "../assets/images/avatars/image-amyrobson.webp";
import iconReply from "../assets/images/icon-reply.svg";
import Button from "./Button";

const CommentCard = ({ onReply, children }) => {
  const [vote, setVote] = useState(0);
  const [reply, setReply] = useState(false);

  const upVoteHandler = () => {
    setVote((prev) => (prev += 1));
  };

  const downVoteHandler = () => {
    if (vote === 0) {
      return;
    }
    setVote((prev) => (prev -= 1));
  };

  const replyHandler = () => {
    console.log("reply", reply);
    setReply(!reply);
    onReply(reply);
  };

  return (
    <div className="rounded-lg bg-white p-4 max-w-xl text-grayishblue flex gap-4">
      <div className="vote text-moderateblue p-4 bg-lightgray rounded-md flex flex-col justify-between items-center h-fit">
        <button type="button" onClick={upVoteHandler}>
          +
        </button>
        <p className="font-bold">{vote}</p>
        <button type="button" onClick={downVoteHandler}>
          -
        </button>
      </div>
      <div>
        <div>
          <div className="user flex justify-between items-center">
            <div className="profile flex justify-start items-center gap-2">
              <img src={amyrobson} alt="amyrobson" width={42} />
              <span className="font-bold text-darkblue">amyrobson</span>
              <span>1 month ago</span>
            </div>
            <Button onClick={replyHandler}>
              <img src={iconReply} />
              <span>Reply</span>
            </Button>
          </div>
        </div>
        <p className="comment mt-4">{children}</p>
      </div>
    </div>
  );
};

export default CommentCard;
