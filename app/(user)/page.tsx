import React from "react";
import { previewData } from "next/headers";

const HomePage = () => {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  return <div>Not in preview mode</div>;
};

export default HomePage;
