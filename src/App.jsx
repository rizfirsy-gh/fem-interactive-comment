import "./App.css";
import Comment from "./components/Comment";
import Form from "./components/Form";

function App() {
  return (
    <section className="w-screen h-full bg-lightgray">
      <div className=" m-auto min-h-screen grid place-items-center max-w-xl">
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
