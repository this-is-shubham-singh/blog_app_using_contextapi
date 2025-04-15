import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import "./App.css";
import { blogContext } from "./context/ContextProvider";

const App = () => {
  const { apiCall } = useContext(blogContext);

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="blogs-cont">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
