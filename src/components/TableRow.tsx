import React from "react";
import type { TableRowData } from "../types";

interface TableRowProps {
  rowData: TableRowData;
  columns: { key: string }[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, columns }) => {
  return (
    <tr className="border-b last:border-0">
      {columns.map((col) => (
        <td key={col.key} className="px-4 py-3">
          {rowData[col.key]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
