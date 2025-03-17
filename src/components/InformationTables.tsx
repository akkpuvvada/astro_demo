import React from "react";
import InfoTable from "./InfoTable";
import { corporateData, financialData } from "../data";

const columns = [
  { key: "no", label: "No." },
  { key: "item", label: "Item" },
  { key: "dateObtained", label: "Date Obtained" },
  { key: "tag", label: "Tag" },
  { key: "index", label: "Index" },
  { key: "notes", label: "Notes" },
  { key: "hyperlink", label: "Hyperlink" },
];

const InformationTables: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-2 mb-8">
        <InfoTable
          title="Corporate Information"
          columns={columns}
          data={corporateData}
          headerFirstCellClassName="bg-mint-500 border-b border-indigo-600 text-white"
        />
      </div>
      <div className="bg-white shadow rounded-lg p-2 mb-8">
        <InfoTable
          title="Financial Information"
          columns={columns}
          data={financialData}
          headerFirstCellClassName="bg-mint-500 border-b border-indigo-600 text-white"
        />
      </div>
    </div>
  );
};

export default InformationTables;
