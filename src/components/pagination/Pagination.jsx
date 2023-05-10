import React from "react";
import "./pagination.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>
          &laquo;
          Prev
        </button>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}

      {currentPage !== totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>
            &raquo;
            Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
