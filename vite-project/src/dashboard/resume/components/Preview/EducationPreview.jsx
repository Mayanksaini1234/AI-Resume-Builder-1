import React from "react";

const EducationPreview = ({ resumeInfo }) => {
  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="text-xl font-semibold tracking-wide"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            Education
          </h2>
          <div
            className="w-full h-[2.5px] mt-1 rounded-full"
            style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
          />
        </div>
        {resumeInfo?.education.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between items-center flex-wrap">
              <div
                className="font-semibold text-lg"
                style={{ color: resumeInfo?.themeColor || "#1f2937" }}
              >
                {data?.universityName}
              </div>
              <div className="text-sm text-gray-500">
                {data?.startDate} - {data?.endDate}
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-1">
              {data?.degree} in {data?.major}
            </div>

            {data?.description && (
              <p className="text-sm text-gray-700 mt-4 whitespace-pre-line leading-relaxed">
                {data?.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default EducationPreview;
