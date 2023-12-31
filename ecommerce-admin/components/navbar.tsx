import { UserButton } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";

const Navbar = () => {
  return (
    <div className="border-bottom">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher />
        <MainNav className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
