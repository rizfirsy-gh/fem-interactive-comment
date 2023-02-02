import "./App.css";
import { useReducer, useId } from "react";
import Comment from "./components/Comment";
import Form from "./components/Form";

function App() {
  const [comments, updateComments] = useReducer(
    (prev, next) => {
      prev, next;
    },
    [
      {
        id: useId(),
        votes: 0,
        content: "lorem ipsum comment comment kek di yutb gitu gitu lah",
        replies: [
          {
            id: useId(),
            votes: 0,
            reply: "lorem ipsum reply replyan",
            replies: [],
          },
        ],
      },
    ]
  );

  const addCommentHandler = () => {};
  return (
    <section className="w-screen h-screen bg-verylightgray grid place-items-center">
      <div className="m-auto grid place-items-center gap-4 max-w-2xl">
        <ul>
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
