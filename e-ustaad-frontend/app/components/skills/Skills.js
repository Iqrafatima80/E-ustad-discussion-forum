import React from "react";

const Skills = ({ children, bgColor }) => {
  return (
    <div className={`bg-${bgColor} w-max py-2 px-4 rounded-xl`}>
      <p className="text-xs">{children}</p>
    </div>
  );
};

export default Skills;
