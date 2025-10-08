import React from "react";
import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashbord(props) {
  // console.log("data", data.tasks);

  console.log("props", props);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeeDashbord;
