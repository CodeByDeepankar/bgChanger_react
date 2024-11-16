import React from "react";
import Btns from "./componets/btns";
import Nav from "./componets/nav";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Nav />
        <Btns />
      </div>
    </>
  );
}

export default App;
