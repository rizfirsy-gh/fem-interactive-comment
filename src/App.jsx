import "./App.css";
import CommentCard from "./components/CommentCard";

function App() {
  return (
    <div className="App bg-lightgray min-h-screen grid place-items-center">
      <ul>
        <li>
          <CommentCard>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quam vero molestiae repudiandae dolore obcaecati odit,
            exercitationem, quod necessitatibus, nobis in recusandae. Modi magni
            minus voluptatem dicta eius id minima?
          </CommentCard>
        </li>
      </ul>
    </div>
  );
}

export default App;
