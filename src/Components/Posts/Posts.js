import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const mystyle = {
    backgroundColor: "aqua",
    borderColor: "red",
    margin:"0px auto",
    padding:"10px"
 };

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard key={postItem.id} postItem={postItem} />
      ))}
    </div>
   
  );
};

export default Posts;