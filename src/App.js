import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import "./App.css";
import { blogContext } from "./context/ContextProvider";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Tag from "./pages/Tag";
import SingleBlog from "./pages/SingleBlog";

const App = () => {
  const { pageNo, setPageNo, apiCall } = useContext(blogContext);
  const [getParam, setParam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setPageNo(1);
  }, [getParam.get("categoryId"), getParam.get("tagId")]);


  useEffect(() => {
    if (getParam.get("categoryId")) {
      const catId = getParam.get("categoryId").replaceAll("-", " ");
      apiCall(pageNo, null, catId);
    } else if (getParam.get("tagId")) {
      const tagId = getParam.get("tagId").replaceAll("-", " ");
      apiCall(pageNo, tagId, null);
    } else {
      apiCall(pageNo);
    }
  }, [pageNo, location.pathname, location.search]);

  return (
    <div className="blogs-cont">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
        <Route path="/category" element={<Category />} />
        <Route path="/tag" element={<Tag />} />
      </Routes>
      <Pagination />
    </div>
  );
};

export default App;
