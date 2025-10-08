import React from "react";
import { motion } from "framer-motion";

function Header({ data, changeUser }) {
  // Determine username based on props.data
  const userName = data && data.firstName ? data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
    // window.location.reload(); // Uncomment if reload is needed
  };

  // Animation variants for the header container
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-end justify-between p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl"
    >
      <motion.h1
        variants={titleVariants}
        className="text-2xl font-medium text-white"
      >
        Hello <br />
        <span className="text-3xl font-semibold text-cyan-400">
          {userName} 👏
        </span>
      </motion.h1>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-600 to-pink-600 text-lg font-medium text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-pink-700"
      >
        Log Out
      </motion.button>
    </motion.div>
  );
}

export default Header;
