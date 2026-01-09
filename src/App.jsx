import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-blue-500 p-6 rounded-lg text-center w-60">
        <h1 className="text-3xl mb-4">{count}</h1>

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
