import React, { useContext } from "react";
import "./component.css";
import { blogContext } from "../context/ContextProvider";
import Blog from "./Blog";
import Loading from "./Loading";

const Blogs = () => {
  const { posts, loading } = useContext(blogContext);

  return loading ? (
    <Loading />
  ) : (
    <div className="blogs-comp">
      {posts.map((data, index) => {
        return <Blog key={index} data={data} />;
      })}
    </div>
  );
};

export default Blogs;
