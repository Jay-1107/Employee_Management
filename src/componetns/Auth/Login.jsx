import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is: ", email);
    console.log("Password is: ", password);

    handleLogin(email, password);

    setEmail("");
    setPassword("");
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
      transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(16, 185, 129, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-gray-800/50 border border-cyan-500/30 p-16 rounded-xl shadow-2xl backdrop-blur-sm"
      >
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <motion.input
            custom={0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            whileFocus="focus"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-cyan-500/50 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
            type="email"
            placeholder="Enter Your Email"
          />
          <motion.input
            custom={1}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            whileFocus="focus"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-cyan-500/50 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 focus:border-cyan-500 transition-colors duration-300"
            type="password"
            placeholder="Enter Password"
          />
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mt-6 text-white bg-gradient-to-r from-emerald-600 to-cyan-600 text-xl py-2 px-8 rounded-full font-semibold hover:bg-gradient-to-r hover:from-emerald-700 hover:to-cyan-700"
          >
            Log in
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
