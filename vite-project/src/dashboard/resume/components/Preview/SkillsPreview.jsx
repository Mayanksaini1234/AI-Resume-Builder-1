import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-8 mt-8">
        <h2
          className="text-xl font-semibold tracking-wide"
          style={{ color: resumeInfo?.themeColor || "#1f2937" }}
        >
          Skills
        </h2>
        <div
          className="w-full h-[2.5px] mt-1 rounded-full"
          style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        {resumeInfo?.skills.map((skill, index) => (
          <div
            key={index}
          >
            <h3 className="text-md font-semibold whitespace-nowrap">
              {skill.name}
            </h3>
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full"
                style={{
                  backgroundColor: resumeInfo?.themeColor || "#3b82f6",
                  width: skill.rating + "%"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
