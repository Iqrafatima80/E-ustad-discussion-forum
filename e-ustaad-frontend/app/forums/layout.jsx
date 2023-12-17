import React from "react";
import ForumSidebar from "../components/forum/f_sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
        <ForumSidebar />
      <div className="flex flex-col p-10 h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

export default layout;