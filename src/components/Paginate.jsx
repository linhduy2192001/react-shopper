import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useCurrentPage } from "../core/hooks";
import { cn } from "../core/utils";

export default function Paginate({ totalPage }) {
  const { pathname } = useLocation();
  const currentPage = useCurrentPage();

  const renderPage = () => {
    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      start = 1;
      end = 5;
    }
    if (end > totalPage) {
      end = totalPage;
      start = end - 4;
      if (start < 1) start = 1;
    }

    const list = [];
    for (let i = start; i <= end; i++) {
      const path = `${pathname}?page=${i}`;
      list.push(
        <li className={cn("page-item ", { active: currentPage === i })}>
          <Link className="page-link" to={path}>
            {i}
          </Link>
        </li>
      );
    }
    return list;
  };
  /**
   * render default page = 1
   * Lấy thông tin page từ search url và render ra page hiện tại
   */
  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        <li className="page-item">
          <a className="page-link page-link-arrow" href="#">
            <i className="fa fa-caret-left" />
          </a>
        </li>
        {renderPage()}
        {/* <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            6
          </a>
        </li> */}
        <li className="page-item">
          <a className="page-link page-link-arrow" href="#">
            <i className="fa fa-caret-right" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
