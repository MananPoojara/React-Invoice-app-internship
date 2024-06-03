import React from "react";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className=" dark:bg-[#141625] bg-[#f8f8fb] duration-300 min-h-screen">
      {/* header Section */}
      <Navbar />
    </div>
  );
};

export default App;
