"use client";

import "./pagination.css";
import { Pagination } from "flowbite-react";

export function Pages({ currentPage, onPageChange }) {
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <div className="pagination-wrapper">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
