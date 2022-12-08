import React from "react";
import SmallCard from "../components/SmallCard";

function tour({ img, name, description }) {
  return (
    <div className="items-center mt-4 pt-4 pb-2 rounded-xl bg-slate-200">
      <div className="flex justify-between">
        <div className="mx-4">
          <h2 className="font-bold">{name}</h2>
          <p>{description}</p>
        </div>

        <button className="text-sm text-white bg-gray-900 px-10 py-2 mx-4 rounded-lg cursor-pointer hover:bg-gray-500 hover:scale-105 transition-transform duration-200 ease-out">
          Book
        </button>
      </div>

      <p className="mx-4 my-4">Description text ext etxt text</p>

      <div className="px-2 w-fit">
        <SmallCard key={img} img={img} location={name} distance={name} />
      </div>
    </div>
  );
}

export default tour;
