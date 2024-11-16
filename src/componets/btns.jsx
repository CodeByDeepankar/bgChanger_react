import React, { useState } from "react";

function Btns() {
  const [color, setColor] = useState("black")

  return (
    <div
      class={`flex items-center justify-center h-svh`}
      style={{ backgroundColor: color }}
    >
        <button
          class="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 shadow-lg shadow-violet-500/50 dark:shadow-lg dark:shadow-violet-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("blue")}
        >
          violet
        </button>
        <button
          class="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("indigo")}
        >
          indigo
        </button>
        <button
          class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          class="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          class="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          class="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-400/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
          onClick={() => setColor("red")}
        >
          red
        </button>


    </div>
  );
}

export default Btns;
