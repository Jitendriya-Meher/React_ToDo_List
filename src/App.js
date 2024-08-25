import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className=" bg-stone-900 grid min-h-screen py-4 relative">

      <p className=" text-stone-700 absolute top-2 right-4">
        Created By Jitendriya Meher 
      </p>
      
      <Todo></Todo>

    </div>
  );
}

export default App;
