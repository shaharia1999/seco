// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // console.log(currentPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className='flex justify-center '>
      <ul className="pagination flex border  mt-20">
        {pageNumbers.map((page) => (
          <li  key={page} className={`page-item px-2 border shadow-md hover:text-red-500 ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
