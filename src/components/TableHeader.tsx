import React from "react";
import type { Column } from "../types";

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-50 border-b text-gray-600">
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            scope="col"
            className={`px-4 py-2 text-left ${col.className || ""}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
