import React from "react";

export default function Hero() {
  return (
    <header className="max-w-screen-xl mx-auto py-4 px-4 md:px-16 mb-10">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-16 lg:space-x-32 items-center text-justify lg:justify-between">
        <div className="space-y-2 lg:space-y-7">
          <div>
            <h2 className="text-2xl lg:text-4xl text-slate-400 font-medium">
              Front End Developer
            </h2>
            <h1 className="text-4xl lg:text-7xl font-medium">Rizal Baihaqi</h1>
          </div>
          <hr />
          <p className="text-base lg:text-xl text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            culpa quasi non neque vero adipisci mollitia numquam sequi eius
            facilis sit commodi nulla, illum fugit molestias incidunt! Enim,
            quos facilis.
          </p>
          <a className="text-lg lg:text-2xl cursor-pointer text-sky-400">
            Let's talk<i className="fa-solid fa-arrow-right ml-4 lg:ml-10"></i>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-96 lg:h-[34rem] rounded-sm mt-4 md:m-0"
        />

        {/* Open the section when i have */}
        {/* <div>
        <div>
          <p>Years of Experience</p>
          <h1>1+</h1>
        </div>
        <div>
          <p>Complete Project</p>
          <h1>Client</h1>
        </div>
        <div>
          <p>Client</p>
          <h1>60+</h1>
        </div>
      </div> */}
      </div>
    </header>
  );
}
