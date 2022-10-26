import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
  Bars3Icon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import SmallCard from "../components/SmallCard";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
//https://hypeserver.github.io/react-date-range/#calendar

function Header() {
  const [searchInput, setSearchInput] = useState("");

  //for DateRange
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [noOfGuests, setNoOfGuests] = useState(1);

  const resetInput = () => {
    setSearchInput("");
    setNoOfGuests(1);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/*logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*search*/}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm col-span-2 md:col-span-1">
        <h1 className="pl-5 hidden">Delhi</h1>
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Where do you want go?"
        />

        <MagnifyingGlassIcon className="w-8 h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 mx-2" />
      </div>

      {/*sign-up*/}
      <div className="hidden md:inline-flex space-x-5 items-center justify-end">
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto pt-4 space-y-2">
          <div className="grid grid-cols-1">
            <SmallCard img="https://links.papareact.com/2io" location="Delhi" />
            <SmallCard img="https://links.papareact.com/2io" location="Delhi" />
          </div>

          <div className="bg-red-800">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={true}
              ranges={state}
              rangeColors={["#FD5b61"]}
              minDate={new Date("10-24-2022")}
            />
          </div>

          <div className="flex items-center mx-2 pb-4">
            <h2 className="text-l flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              className="w-12 ml-2 pl-2 outline-none text-red-400"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>

          <div className="flex">
            <button className="bg-red-400 text-white mx-2 py-4 shadow-md rounded-lg my-4 hover:shadow-xl active:scale-90 transition duration-150 flex-grow">
              Search
            </button>
            <button
              onClick={resetInput}
              className="text-red-400 bg-white mx-2 py-4 shadow-md rounded-lg my-4 hover:shadow-xl active:scale-90 transition duration-150 flex-grow"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
