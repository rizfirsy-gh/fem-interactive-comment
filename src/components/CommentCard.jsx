import React, { useState } from "react";
import amyrobson from "../assets/images/avatars/image-amyrobson.webp";
import iconReply from "../assets/images/icon-reply.svg";
import iconDelete from "../assets/images/icon-delete.svg";
import Button from "./Button";

const CommentCard = ({ type, onReply, children }) => {
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
    <div className="w-full rounded-lg bg-white p-4 text-grayishblue flex gap-4">
      <div className="vote text-moderateblue bg-lightgray rounded-md flex flex-col justify-between items-center h-fit">
        <button
          type="button"
          onClick={upVoteHandler}
          className="py-2 px-4 cursor-pointer"
        >
          +
        </button>
        <p className="font-bold py-2 px-4">{vote}</p>
        <button
          type="button"
          onClick={downVoteHandler}
          className="py-2 px-4 cursor-pointer"
        >
          -
        </button>
      </div>
      <div className="w-full">
        <div>
          <div className="user flex justify-between items-center">
            <div className="profile flex justify-start items-center gap-2">
              <img src={amyrobson} alt="amyrobson" width={42} />
              <span className="font-bold text-darkblue">amyrobson</span>
              <span>1 month ago</span>
            </div>
            {type !== "reply" && (
              <Button onClick={replyHandler}>
                <img src={iconReply} />
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
    </div>
  );
};

export default CommentCard;
