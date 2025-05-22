import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center p-2 w-full shadow-md">
      <Link to={"/"}>
        <img
          src="/logo.png"
          alt="logo"
          className=" cursor-pointer w-[80px] h-[80px] "
        />
      </Link>
      {!isSignedIn ? (
        <Link to={"/auth/sign-in"}>
          <Button >Get Started</Button>
        </Link>
      ) : (
        <div className="flex gap-6 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">DashBoard</Button>
          </Link>
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default Header;
