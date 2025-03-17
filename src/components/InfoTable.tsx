import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import type { TableRowData, Column } from '../types'

interface InfoTableProps {
  title: string;
  columns: Column[];
  data: TableRowData[];
  headerFirstCellClassName?: string;
}

const InfoTable: React.FC<InfoTableProps> = ({ title, columns, data, headerFirstCellClassName }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <TableHeader columns={columns} firstCellClassName={headerFirstCellClassName} />
          <tbody>
            {data.map((row, index) => (
              <TableRow key={index} rowData={row} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTable;
