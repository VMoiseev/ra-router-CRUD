import { Routes, Route } from "react-router";
import "./App.css";
import AddPost from "./components/AddPost";
import Home from "./components/Home";
import ViewPost from "./components/ViewPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPost" element={<AddPost />} />
        <Route path="/:postId" element={<ViewPost />} />
      </Routes>
    </div>
  );
}

export default App;
