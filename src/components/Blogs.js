import React, { useContext } from "react";
import "./component.css";
import { blogContext } from "../context/ContextProvider";
import Blog from "./Blog";

const Blogs = () => {
  const { posts } = useContext(blogContext);

  return (
    <div className="blogs-comp">
      {posts.map((data, index) => {
        return <Blog key={index} data={data} />;
      })}
    </div>
  );
};

export default Blogs;
