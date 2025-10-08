import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";

function AllTask() {
  const [userData] = useContext(AuthContext);
  console.log("userData", userData);

  // Animation variants for the task rows
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    hover: {
      scale: 1.02,
      boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 mt-6 rounded-xl shadow-2xl max-w-5xl mx-auto">
      {/* Header Row */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-red-500 to-pink-500 mb-4 py-3 px-6 flex justify-between rounded-lg text-white shadow-lg"
      >
        <h2 className="text-lg font-semibold w-1/7">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/7">New Task</h3>
        <h5 className="text-lg font-semibold w-1/7">Active Task</h5>
        <h5 className="text-lg font-semibold w-1/7">Completed</h5>
        <h5 className="text-lg font-semibold w-1/7">Failed</h5>
      </motion.div>

      {/* Task Rows */}
      <div>
        <AnimatePresence>
          {userData.map((e, inx) => (
            <motion.div
              key={inx}
              custom={inx}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              variants={rowVariants} // Combined variants
              className="bg-gray-800/50 border border-cyan-500/30 mb-3 py-3 px-6 flex justify-between rounded-lg text-white hover:bg-gray-700/50 transition-colors duration-300"
            >
              <h2 className="text-lg font-medium w-1/9">{e.firstName}</h2>
              {}
              <h3 className="text-lg font-medium w-1/9 text-blue-400">
                {e.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/9 text-yellow-400">
                {e.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/9 text-green-400">
                {e.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/9 text-red-400">
                {e.taskCounts.failed}
              </h5>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AllTask;
