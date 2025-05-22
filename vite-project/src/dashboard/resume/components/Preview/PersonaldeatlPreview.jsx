import React from "react";

const PersonalDetailPreview = ({ resumeInfo }) => {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full">
        {/* Name & Job Title */}
        <div className="text-center mb-6">
          <h1
            className="text-4xl font-extrabold tracking-wide"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <h2 className="text-xl text-gray-600 mt-1 font-medium">
            {resumeInfo?.jobTitle}
          </h2>
          <h2
            className="text-sm text-gray-500 mt-1"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            {resumeInfo?.address}
          </h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-8 text-sm font-bold pt-2 pb-6">
          <div
            className="text-center"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            <h2>{resumeInfo?.phone}</h2>
          </div>
          <div
            className="text-center"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            <h2>{resumeInfo?.email}</h2>
          </div>
        </div>
        <div
          className="w-full h-[2.5px] mt-1 rounded-full"
          style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
        />
      </div>{" "}
    </div>
  );
};

export default PersonalDetailPreview;
