import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className="h-16 fixed w-full bg-white z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <nav className="w-full max-w-[1230px] mx-auto h-full px-5 flex justify-between items-center ">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
