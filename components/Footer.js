import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 mt-4">
        <div className="max-w-7xl mx-auto sm:px-16 pb-6 grid grid-cols-1 md:grid-cols-3 px-16 text-xs text-gray-800">
          <div className="space-y-2 py-2 pr-10">
            <h5 className="font-bold pt-6">About</h5>
            <p className="cursor-pointer">How it works</p>
            <p className="cursor-pointer">FAQ</p>
            <p className="cursor-pointer">Contact</p>
          </div>

          <div className="space-y-2 py-2 pr-10">
            <h5 className="font-bold pt-6">Join as a guide</h5>
            <p className="cursor-pointer">How it works</p>
            <p className="cursor-pointer">FAQ</p>
          </div>

          <div className="space-y-2 py-2 pr-10">
            <h5 className="font-bold pt-6">Sign-up for Doordarshan</h5>
            <p>
              Doordarshan is our newsletter about all things travel, food and
              culture. Discover your next destination
            </p>
            <div className="flex items-center border-2 rounded-lg py-2 md:shadow-sm bg-white ">
              <input
                type="text"
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                placeholder="E-mail"
              />
            </div>
            <button className="bg-red-400 text-white px-10 py-4 shadow-md rounded-lg hover:shadow-xl active:scale-90 transition duration-150">
              Sign-Up
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-full text-center">
        <h1 className="text-xs p-2">Copyright - Boardless</h1>
      </div>
    </div>
  );
}

export default Footer;
