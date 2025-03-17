import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import type { TableRowData, Column } from '../types'
import { InformationCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface InfoTableProps {
  title: string;
  columns: Column[];
  data: TableRowData[];
  headerFirstCellClassName?: string;
}

const InfoTable: React.FC<InfoTableProps> = ({ title, columns, data, headerFirstCellClassName }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Information"
          >
            {/* Info icon (Heroicons-style) */}
            <InformationCircleIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right side: Ellipsis button */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Options"
        >
          {/* Horizontal three-dot icon */}
          <EllipsisHorizontalIcon className="w-6 h-6" />
        </button>
      </div>
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
