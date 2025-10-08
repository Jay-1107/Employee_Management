import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [date, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const taskData = {
      title,
      date,
      description,
      asignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setNewTask(taskData);

    if (!userData) {
      console.warn("Employee data is still loading.");
      return;
    }

    const data = [...userData]; // Create a copy to avoid mutating state directly

    let taskAdded = false;
    data.forEach((employee) => {
      if (asignTo === employee.firstName) {
        employee.tasks.push(taskData);
        employee.taskCounts.newTask += 1;
        taskAdded = true;
      }
    });

    if (taskAdded) {
      setUserData(data);
      console.log("Task added successfully:", data);
    } else {
      console.warn("No employee found with the given name.");
    }

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  // Animation variants for the form container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for form elements
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
    }),
    focus: {
      borderColor: "rgba(16, 185, 129, 0.8)",
      boxShadow: "0px 0px 10px rgba(16, 185, 129, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(16, 185, 129, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 mt-7 rounded-xl shadow-2xl max-w-4xl mx-auto"
    >
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2 space-y-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <motion.input
              custom={0}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              whileFocus="focus"
              value={title}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-4 w-4/5 rounded-full outline-none bg-transparent border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <motion.input
              custom={1}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              whileFocus="focus"
              value={date}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-4 w-4/5 rounded-full outline-none bg-transparent border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <motion.input
              custom={2}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              whileFocus="focus"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-4 w-4/5 rounded-full outline-none bg-transparent border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <motion.input
              custom={3}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              whileFocus="focus"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-4 w-4/5 rounded-full outline-none bg-transparent border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
              type="text"
              placeholder="Design, Dev etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start space-y-4">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <motion.textarea
            custom={4}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            whileFocus="focus"
            value={description}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-xl outline-none bg-transparent border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
            placeholder="Enter task description here..."
          />
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            type="submit" // Added type="submit" for proper form submission
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-3 px-5 rounded-full text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-emerald-700 hover:to-cyan-700 w-full"
          >
            Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

export default CreateTask;
