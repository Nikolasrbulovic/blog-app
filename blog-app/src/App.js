import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import AppPosts from "./components/AppPosts";
import SinglePost from "./components/SinglePost";
import ShowPost from "./components/ShowPost";
import MyNavBar from "./layout/NavBar";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="posts" element={<AppPosts></AppPosts>}></Route>
        <Route path="posts/:id" element={<ShowPost></ShowPost>}></Route>
        <Route path="add" element={<AddPost></AddPost>}></Route>
        <Route path="edit/:id" element={<AddPost></AddPost>}></Route>
      </Routes>
    </>
  );
}

export default App;
