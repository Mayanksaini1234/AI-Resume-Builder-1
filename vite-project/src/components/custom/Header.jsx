import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center p-4 w-full shadow-md">
      <Link to={"/dashboard"}>
        <img
          src="/logo.svg"
          alt="logo"
          className=" cursor-pointer w-[70px] h-[40px] "
        />
      </Link>
      {!isSignedIn ? (
        <Link to={"/auth/sign-in"}>
          <Button className="h-[5]">Get Started</Button>
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
