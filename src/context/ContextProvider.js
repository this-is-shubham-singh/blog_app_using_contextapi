import React, { useState } from "react";
import { createContext } from "react";

export const blogContext = createContext();

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);

  const apiCall = async (page, tag, category) => {
    setLoading(true);

    let baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

    baseUrl += `?page=${page}`;

    if (tag) {
      baseUrl += `&tag=${tag}`;
    } else if (category) {
      baseUrl += `&category=${category}`;
    }

    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      // console.log(data);

      setPosts(data.posts);
      setPageNo(data.page);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  const changePageNo = (pageNumber) => {
    setPageNo(pageNumber);
  };

  const value = {
    apiCall,
    posts,
    pageNo,
    setPageNo,
    totalPages,
    loading,
    changePageNo,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
};

export default ContextProvider;
