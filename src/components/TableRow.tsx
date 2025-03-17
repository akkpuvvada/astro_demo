import React from "react";
import type { TableRowData } from "../types";

interface TableRowProps {
  rowData: TableRowData;
  columns: { key: string }[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, columns }) => {
  return (
    <tr className="border-b border-gray-200 last:border-0 divide-x divide-gray-200">
      {columns.map((col) => {
        // Default cell content
        let cellContent = rowData[col.key];

        // If this column is "tag", render it as a circular badge
        if (col.key === "tag") {
          cellContent = (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
              {rowData[col.key]}
            </span>
          );
        }

        return (
          <td key={col.key} className="px-2 py-1 text-gray-700">
            {cellContent}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
