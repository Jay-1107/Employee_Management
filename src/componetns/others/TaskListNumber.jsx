import React from "react";
import { motion } from "framer-motion";

function TaskListNumber({ data }) {
  // Animation variants for task cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  // Fallback data to prevent undefined errors
  const taskCounts = data?.taskCounts || {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  };

  return (
    <div className="flex flex-wrap mt-10 justify-between gap-5">
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-6 bg-gradient-to-br from-red-600 to-pink-600 text-white shadow-lg"
      >
        <h2 className="text-3xl font-semibold">{taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </motion.div>

      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg"
      >
        <h2 className="text-3xl font-semibold">{taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </motion.div>

      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg"
      >
        <h2 className="text-3xl font-semibold">{taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </motion.div>

      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="rounded-xl w-full sm:w-[48%] lg:w-[23%] py-6 px-6 bg-gradient-to-br from-yellow-600 to-amber-600 text-white shadow-lg"
      >
        <h2 className="text-3xl font-semibold">{taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </motion.div>
    </div>
  );
}

export default TaskListNumber;
