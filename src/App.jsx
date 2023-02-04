import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import "./App.css";
import { useReducer, useId } from "react";
import Comment from "./components/Comment";
import Form from "./components/Form";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXi95CZ3_q2CpAmvyl5Lh4_R7uN7I_3eE",
  authDomain:
    "comments-51286-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comments-51286",
  storageBucket: "comments-51286.appspot.com",
  messagingSenderId: "1053451572245",
  appId: "1:1053451572245:web:bce73a771809111deaea1c",
  databaseUrl:
    "https://comments-51286-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// db url: https://comments-51286-default-rtdb.asia-southeast1.firebasedatabase.app/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize the dt and get reference

function addComment(commentId, content, votes, replies) {
  const database = getDatabase(app);
  set(ref(database, "comments" + commentId), {
    id: commentId,
    content: content,
    votes: votes,
    replies: replies,
  });
}

const commentsReducer = (currentComments, action) => {
  switch (action.type) {
    case "SET":
      return action.comments;
    case "ADD":
      return [...currentComments, action.comment];
    case "DELETE":
      return currentComments.filter((comment) => comment.id !== action.id);
  }
};

function App() {
  const [comments, updateComments] = useReducer(commentsReducer, []);
  const newId = useId();

  const addCommentHandler = (content) => {
    console.log(content);
    addComment(newId, content, 0, []);
  };
  return (
    <section className="w-screen h-screen bg-verylightgray grid place-items-center">
      <div className="m-auto grid place-items-center gap-4 md:min-w-[650px] max-w-2xl">
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
