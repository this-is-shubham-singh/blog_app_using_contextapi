import React, { useState } from "react";
import { createContext } from "react";

export const blogContext = createContext();

const ContextProvider = ({ children }) => {
  let baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const apiCall = async (page) => {
    const pageNo = page ?? 1;

    try {
      const response = await fetch(`${baseUrl}?page=${pageNo}`);
      const data = await response.json();
      // console.log(data);

      setPosts(data.posts);
      setPageNo(data.page);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    apiCall,
    posts,
    pageNo,
    setPageNo,
    totalPages,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
};

export default ContextProvider;
