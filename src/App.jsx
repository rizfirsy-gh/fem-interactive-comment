import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Comment from "./components/Comment";
import Form from "./components/Form";

function App() {
  const comments = useSelector((state) => state.comments);

  const addCommentHandler = (content) => {};
  return (
    <section className="w-screen h-screen bg-verylightgray grid place-items-center">
      <div className="m-auto grid place-items-center gap-4 md:min-w-[650px] max-w-2xl">
        <ul className="text-black">
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
