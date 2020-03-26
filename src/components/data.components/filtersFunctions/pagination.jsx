import React from "react";

const Pagination = ({ companiesPerPage, totalCompanies, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCompanies / companiesPerPage); i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length < 39) {
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item" id={number}>
              <a
                onClick={() => {
                  const els = document.querySelectorAll(".page-item");
                  for (var i = 0; i < els.length; i++) {
                    els[i].classList.remove("opened-page");
                  }
                  document.getElementById(number).classList.add("opened-page");
                  return paginate(number);
                }}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return (
      <div className="pagination-large">
        <label>Page: </label>
        <input
          className="input-page-pagination"
          id="pageNumber"
          type="number"
          onChange={() => paginate(document.getElementById("pageNumber").value)}
          min="1"
          max={pageNumbers.length}
        />
        /{pageNumbers.length}
      </div>
    );
  }
};

export default Pagination;
