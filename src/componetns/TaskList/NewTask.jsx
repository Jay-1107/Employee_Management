import React from "react";

function NewTask({ data }) {
  console.log("datttttt", data);
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[320px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="mt-4">
          <button className="w-full">Accept Task</button>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
