import React from "react";
import type { TableRowData } from "../types";
import "../styles/global.css"

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
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-mint-${rowData[col.key]}00 text-black font-semibold`}>
              {rowData[col.key]}
            </span>
          );
        }

        if (col.key === "hyperlink") {
          cellContent = (
            <span className="text-violet-600 items-center justify-center cursor-pointer whitespace-nowrap">
              {rowData[col.key]}
            </span>
          );
        }

        // Apply center alignment only to "tag" and "hyperlink" cells
        const centerCell =
          col.key === "tag" || col.key === "hyperlink" || col.key === "no"
            ? "text-center align-middle font-semibold"
            : "";

        return (
          <td key={col.key} className={`px-0.5 py-2 text-gray-700 text-s max-w-[250px] ${centerCell} `}>
            {cellContent}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
