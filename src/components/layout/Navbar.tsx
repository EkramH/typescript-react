import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full max-w-[1230px] mx-auto h-full px-5 flex justify-between items-center ">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
