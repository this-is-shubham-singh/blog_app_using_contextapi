import React from "react";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>{data.title}</h2>
      <h4>{data.category}</h4>
      <p>{data.content}</p>
      <p>{data.date}</p>
      <div className="tags-cont">
        {data.tags.map((value, index) => {
          return <p key={index}>#{value}</p>;
        })}
      </div>
    </div>
  );
};

export default Blog;
