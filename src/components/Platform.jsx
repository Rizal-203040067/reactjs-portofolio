import React from "react";

export default function Platform() {
  return (
    <section className="flex flex-col items-center w-full bg-black opacity-40 mb-8 lg:mt-8 lg:mb-12">
      <div className="max-w-screen-xl  mx-auto py-4 lg:py-10 px-4 md:px-16">
        <div className="flex flex-col md:flex-row space-x-4 lg:space-x-10 space-y-4 md:space-y-0 lg:items-center text-justify lg:justify-between">
          <div className="flex flex-row items-center">
            <img
              className="h-12 lg:h-20"
              src="https://img.icons8.com/?size=100&id=AMTnJbMZF7tD&format=png&color=94a3b8"
              alt=""
            />
            <h1 className=" text-xl lg:text-4xl ml-2">Shutterstock</h1>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="h-12 lg:h-20"
              src="https://img.icons8.com/?size=100&id=447&format=png&color=94a3b8"
              alt=""
            />
            <h1 className="text-xl lg:text-4xl ml-2">Linkedln</h1>
          </div>
          <div className="flex flex-row items-center">
            <img
              className="h-12 lg:h-20"
              src="https://img.icons8.com/?size=100&id=12598&format=png&color=94a3b8"
              alt=""
            />
            <h1 className="text-xl lg:text-4xl ml-2">Github</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
