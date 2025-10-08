import React from "react";
import AccesptTask from "./AccesptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

export default function TaskList({ data }) {
  console.log("data.tasks", data.tasks);

  return (
    <div
      id="tasklist"
      className="flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          console.log("e.active", e.active);
          return <AccesptTask key={idx} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        }
        // return <div key={idx}>No tasks match this condition</div>;
      })}
    </div>
  );
}

{
  /*<div className="flex-shrink-0 h-full w-[320px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
          <h4 className="text-sm">{data.tasks.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.tasks.title}</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum
          error illum magni possimus sapiente?
        </p>
      </div> 

       <div className="flex-shrink-0 h-full w-[320px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Vedio</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum
          error illum magni possimus sapiente?
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[320px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Vedio</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum
          error illum magni possimus sapiente?
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[320px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Vedio</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum
          error illum magni possimus sapiente?
        </p>
      </div> */
}
