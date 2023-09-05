import Popular from "../Components/Popular";
import Veggi from "../Components/Veggi";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggi />
      <Popular />
    </motion.div>
  );
}
