import React from "react";
import "./styles/App.scss";
import Home from "./Components/pages/Home";
import Navbar from "./Components/elements/Navbar";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import AddPost from "./Components/Posts/AddPost";
import Post from "./Components/Posts/Post";
import UpdatePost from "./Components/Posts/UpdatePost";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/updatePost/:id" element={<UpdatePost />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
