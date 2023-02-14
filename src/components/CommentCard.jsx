import React, { useState } from "react";
import amyrobson from "../assets/images/avatars/image-amyrobson.webp";
import iconReply from "../assets/images/icon-reply.svg";
import iconDelete from "../assets/images/icon-delete.svg";
import Button from "./Button";

const CommentCard = ({ votes, type, onReply, children }) => {
  const upVoteHandler = () => {};

  const downVoteHandler = () => {};

  const replyHandler = () => {};

  return (
    <div className="w-full rounded-lg bg-white p-4 text-grayishblue flex gap-4">
      {/* start of vote components */}
      <div className="vote text-moderateblue bg-lightgray rounded-md flex flex-col justify-between items-center h-fit">
        <button
          type="button"
          onClick={upVoteHandler}
          className="py-2 px-4 cursor-pointer"
        >
          +
        </button>
        <p className="font-bold py-2 px-4">{votes}</p>
        <button
          type="button"
          onClick={downVoteHandler}
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
            {/* {type !== "reply" && (
              <Button onClick={replyHandler}>
                {!reply ? (
                  <img
                    src={iconReply}
                    style={{
                      display: "none",
                    }}
                  />
                ) : (
                  <img
                    src={iconReply}
                    style={{
                      display: "block",
                    }}
                  />
                )}

                {!reply ? (
                  <span className="text-softred">Cancel reply</span>
                ) : (
                  <span>Reply</span>
                )}
              </Button>
            )}
            {type === "reply" && (
              <Button onClick={replyHandler}>
                <img src={iconDelete} />
                <span className="text-softred">Delete</span>
              </Button>
            )} */}
          </div>
        </div>
        <p className="comment mt-4">{children}</p>
      </div>

      {/* end of comment text */}
    </div>
  );
};

export default CommentCard;
