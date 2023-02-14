import React from "react";
import uniqid from "uniqid";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "./states/actions";
import Comment from "./components/Comment";
import Form from "./components/Form";

function App() {
  const comments = useSelector((state) => state.comments);
  const dispatchNewComment = useDispatch();

  const addCommentHandler = (newComment) => {
    const generateId = uniqid();
    dispatchNewComment({
      type: "comments/addComment",
      payload: {
        id: generateId,
        text: newComment,
        replies: [],
        votes: 0,
      },
    });
  };
  return (
    <section className="w-screen min-h-screen bg-verylightgray grid place-items-center py-10">
      <div className="m-auto grid place-items-center gap-4 md:min-w-[650px] max-w-2xl">
        <ul className="text-black w-full grid grid-cols-1 gap-4">
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
        <Form placeholder={"Add a comment..."} onSubmit={addCommentHandler} />
      </div>
    </section>
  );
}

export default App;
