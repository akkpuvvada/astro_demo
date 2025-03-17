import React from "react";

const columns = [
  { key: "no", label: "No." },
  { key: "item", label: "Item" },
  { key: "dateObtained", label: "Date Obtained" },
  { key: "tag", label: "Tag" },
  { key: "index", label: "Index" },
  { key: "notes", label: "Notes" },
  { key: "hyperlink", label: "Hyperlink", className: "text-blue-600 underline cursor-pointer" },
];

const InformationTables: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 mb-8">
      </div>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
      </div>
    </div>
  );
};

export default InformationTables;
