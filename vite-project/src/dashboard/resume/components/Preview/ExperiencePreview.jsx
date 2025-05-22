import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  if (!resumeInfo?.experience || resumeInfo.experience.length === 0)
    return null;
  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="text-xl font-semibold tracking-wide "
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            Professional Experience
          </h2>
          <div
            className="w-full h-[2.5px] mt-1 rounded-full"
            style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
          />
        </div>

        {resumeInfo.experience.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between items-center flex-wrap">
              <div
                className="font-semibold text-lg"
                style={{ color: resumeInfo?.themeColor || "#1f2937" }}
              >
                {data?.title}
              </div>
              <div className="text-sm text-gray-500">
                {data?.startDate} -{" "}
                {data?.currentlyWorking ? "Present" : data?.endDate}
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-1">
              {data?.companyName}, {data?.city}
            </div>

            {data?.workSummery && (
              <p className="text-sm text-gray-700 mt-4 whitespace-pre-line leading-relaxed">
                {data.workSummery}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePreview;
