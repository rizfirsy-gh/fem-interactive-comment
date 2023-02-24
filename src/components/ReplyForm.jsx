import React, { useState, useRef } from "react";
import uniqid from "uniqid";
import juliusomo from "../assets/images/avatars/image-juliusomo.webp";
import Button from "./Button";

const ReplyForm = ({ placeholder, onSubmit }) => {
  const [newReply, setNewReply] = useState("");
  const refReply = useRef();

  const addReplyHandler = (ev) => {
    ev.preventDefault();
    const generateId = uniqid();
    onSubmit(newReply, generateId);
    setNewReply((prev) => (prev = ""));
  };

  const newReplyHandler = ({ currentTarget }) => {
    setNewReply(currentTarget.value);
  };

  return (
    <form
      className="bg-white p-4 rounded-lg flex justify-between items-start w-full gap-4"
      onSubmit={addReplyHandler}
    >
      <img src={juliusomo} width={42} />
      <textarea
        placeholder={placeholder}
        className="p-4 text-grayishblue outline outline-2 outline-lightgray rounded-md w-full"
        onChange={newReplyHandler}
        ref={refReply}
        value={newReply}
      />
      <Button type="submit">SEND</Button>
    </form>
  );
};

export default ReplyForm;
