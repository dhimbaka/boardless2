import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  MapIcon,
} from "@heroicons/react/24/solid";

function Header() {
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
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Where do you want go?"
        />
        <MagnifyingGlassIcon className="hidden md:inline h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2" />
      </div>

      {/*sign-up*/}
        <div className="flex space-x-5 items-center justify-end">

         <div className="flex space-x-2 items-center justify-end text-gray-500 cursor-pointer">
            <p className="hidden md:inline">Join us</p>
          <MapIcon className="h-6" />   
        </div>   
      
      <div className="flex space-x-1 items- border-2 p-2 rounded-full cursor-pointer ">
          <Bars3Icon className="h-6" />
          <UserIcon className="h-6" />
        </div>
        
        </div> 
    </header>
  );
}

export default Header;
