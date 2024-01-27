import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1220px] mx-auto px-5 bg-teal-200">
      {children}
    </div>
  );
};

export default Container;
