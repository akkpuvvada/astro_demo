import React from "react";
import type { Column } from "../types";

interface TableHeaderProps {
  columns: Column[];
  firstCellClassName?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, firstCellClassName }) => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
      <tr className="divide-x divide-slate-200">
        {columns.map((col, index) => (
          <th
            key={col.key}
            scope="col"
            className={`px-2 py-1 text-center ${index === 0 && firstCellClassName ? firstCellClassName : ""} ${col.className || ""}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
