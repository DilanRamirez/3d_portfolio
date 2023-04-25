import React from "react";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function InfoOverlay() {
  const goDown = (
    <ExpandMoreIcon
      className="chevron-down"
      onClick={() => console.log("clicked")}
    />
  );

  return (
    <div className="intro-container">
      <div className="info-container">
        <motion.div
          animate={{ x: [-150, 0], opacity: 1 }}
          transition={{ ease: "easeIn", duration: 2 }}
          initial={{ opacity: 0 }}
          style={{ marginTop: -20 }}
          whileInView={{ opacity: [1] }}
        >
          <p className="title-name fullname">Dilan Ramirez</p>
        </motion.div>
        <motion.div
          animate={{ x: [-150, 0], opacity: 1 }}
          transition={{ opacity: 0, duration: 2, delay: 1 }}
          initial={{ opacity: 0 }}
          style={{ marginTop: -30 }}
        >
          <p className="ocupation">Software Engineer</p>
        </motion.div>
        <motion.div
          animate={{ x: [-150, 0], opacity: 1 }}
          transition={{ opacity: 0, duration: 2, delay: 2 }}
          initial={{ opacity: 0 }}
          style={{ marginTop: -20 }}
        >
          <p className="second-ocupation">Web developer</p>
        </motion.div>{" "}
        <motion.div
          animate={{ y: [250, 0], opacity: 1 }}
          transition={{ opacity: 0, duration: 2.5, delay: 2 }}
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0 }}
        >
          {goDown}
        </motion.div>
      </div>
    </div>
  );
}

export default InfoOverlay;
