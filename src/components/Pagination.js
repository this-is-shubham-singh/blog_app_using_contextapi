import React, { useContext } from "react";
import "./component.css";
import { blogContext } from "../context/ContextProvider";

const Pagination = () => {
  const { pageNo, totalPages, changePageNo } = useContext(blogContext);

  return (
    <div className="footer-comp">
      <div className="footer-buttons-cont">
        {pageNo > 1 ? (
          <button
            onClick={() => {
              changePageNo(pageNo - 1);
            }}
          >
            previous
          </button>
        ) : null}

        {pageNo < totalPages ? (
          <button
            onClick={() => {
              changePageNo(pageNo + 1);
            }}
          >
            next
          </button>
        ) : null}
      </div>
      <div>
        <p>
          page {pageNo} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
