import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

const Blog = ({ data }) => {
  return (
    <div className="blog-card">
      <h2>{data.title}</h2>
      <NavLink
        className="navlinks"
        to={`category?categoryId=${data.category.replaceAll(" ", "-")}`}
      >
        <h4 className="blog-category">{data.category}</h4>
      </NavLink>
      <p>{data.content}</p>
      <p>{data.date}</p>
      <div className="tags-cont">
        {data.tags.map((value, index) => {
          return (
            <NavLink
              className="navlinks"
              key={index}
              to={`tag?tagId=${value.replaceAll(" ", "-")}`}
            >
              <p className="blog-tag">#{value}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
