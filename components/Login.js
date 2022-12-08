import React from "react";
import {
  UserIcon,
  Bars3Icon,
  MapIcon,
} from "@heroicons/react/24/solid";


function Login() {
  return (
    <div className="hidden md:inline-flex space-x-5 items-center justify-end">
      {/*sign-up*/}
      <div className="flex space-x-2 items-center justify-end text-gray-500 cursor-pointer">
        <p className="hidden md:inline">Join us</p>
        <MapIcon className="h-6" />
      </div>

      {/*log-in*/}
      <div className="flex space-x-1 items- border-2 p-2 rounded-full cursor-pointer">
        <Bars3Icon className="h-6" />
        <UserIcon className="h-6" />
      </div>
    </div>
  );
}

export default Login;
