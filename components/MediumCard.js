import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
      
      <div className="relative h-40 w-40">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>

      <div>
        <h3 className="text-l mt-3">{title}</h3>
      </div>
    
    </div>
  );
}

export default MediumCard;
