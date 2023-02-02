import "./App.css";
import Comment from "./components/Comment";
import Form from "./components/Form";

function App() {
  return (
    <section className="w-screen h-screen bg-verylightgray grid place-items-center">
      <div className="m-auto grid place-items-center gap-4 max-w-2xl">
        <ul>
          <li>
            <Comment />
          </li>
        </ul>
        <Form placeholder={"Add a comment..."} />
      </div>
    </section>
  );
}

export default App;
