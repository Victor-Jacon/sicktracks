// Paginação 3

import React from 'react'

const Pagination = ({ tracksPerPage, totalTracks, paginate }) => {
  const pageNumbers = [];

  // Paginação 4
  for (let i = 1; i <= Math.ceil(totalTracks/tracksPerPage); i++) {
    pageNumbers.push(i);
  }

  // Paginação 5
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item" onClick={() => paginate(number)}>
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
