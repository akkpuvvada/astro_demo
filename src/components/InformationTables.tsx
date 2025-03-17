import React from "react";
import InfoTable from "./InfoTable";
import { corporateData, financialData } from "../data";

interface Column {
  key: string;
  label: string;
  className?: string;
}

const columns: Column[] = [
  { key: "no", label: "No." },
  { key: "item", label: "Item", className: "max-w-s" },
  { key: "dateObtained", label: "Date Obtained" },
  { key: "tag", label: "Tag" },
  { key: "index", label: "Index" },
  { key: "notes", label: "Notes" },
  { key: "hyperlink", label: "Hyperlink" },
];

const InformationTables: React.FC = () => {
  return (
    <div className="information-tables">
      <div className="table-container">
        <InfoTable
          title="Corporate Information"
          columns={columns}
          data={corporateData}
          headerFirstCellClassName="header-first-cell"
        />
      </div>
      <div className="table-container">
        <InfoTable
          title="Financial Information"
          columns={columns}
          data={financialData}
          headerFirstCellClassName="header-first-cell"
        />
      </div>
      <style jsx>{`
        .information-tables {
          width: 100%;
          margin: 0 auto;
          padding: 1rem;
          background-color: #f1f5f9; /* Equivalent to bg-slate-100 */
        }
        .table-container {
          background-color: #ffffff; /* Equivalent to bg-white */
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Equivalent to shadow */
          border-radius: 0.5rem; /* Equivalent to rounded-lg */
          padding: 0.5rem; /* Equivalent to p-2 */
          margin-bottom: 2rem; /* Equivalent to mb-8 */
        }
        .header-first-cell {
          background-color: #6B6E80; /* Mint/Teal 500 */
          border-bottom: 1px solid #4f46e5; /* Indigo 600 */
          color: #ffffff; /* Text white */
        }
      `}</style>
    </div>
  );
};

export default InformationTables;
