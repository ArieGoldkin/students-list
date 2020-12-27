import React from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  totalStudents: number;
  studentsPerPage: number;
  paginate: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalStudents / props.studentsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to={`/${number}`}
              onClick={props.paginate.bind(null, number)}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
