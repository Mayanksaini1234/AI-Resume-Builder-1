import React from "react";

const SummaryPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.summery) return null;

  return (
    <div className="mt-2 px-4 w-full text-justify ">
      <div className="  max-w-3xl mx-auto break-words">
        <h2 className="text-gray-700 text-sm ">{resumeInfo.summery}</h2>
      </div>
    </div>
  );
};

export default SummaryPreview;
