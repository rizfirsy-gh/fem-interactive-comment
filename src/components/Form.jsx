import React from "react";
import amyrobson from "../assets/images/avatars/image-amyrobson.webp";
import Button from "./Button";

const Form = ({ placeholder }) => {
  const addCommentHandler = (ev) => {
    ev.preventDefault();
  };
  return (
    <form
      className="bg-white p-4 rounded-lg flex justify-between items-start w-full gap-4"
      onSubmit={addCommentHandler}
    >
      <img src={amyrobson} width={42} onSubmit={addCommentHandler} />
      <textarea
        placeholder={placeholder}
        className="p-4 text-grayishblue outline outline-2 outline-lightgray rounded-md w-full"
      />
      <Button type="submit">SEND</Button>
    </form>
  );
};

export default Form;
