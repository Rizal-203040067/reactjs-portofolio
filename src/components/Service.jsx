import React from "react";

export default function Service() {
  return (
    <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-16">
      <div className="flex flex-col md:flex-row space-x-0 lg:space-x-10 items-center text-justify lg:justify-between">
        <div className="basis-1 md:basis-5/12 flex flex-col ">
          <h1 className="text-4xl lg:text-6xl font-medium">
            My Awesome Service
          </h1>
          <p className="text-base lg:text-xl text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            fugit officiis porro enim veniam? Illo totam ducimus soluta est
            tenetur.
          </p>
        </div>

        <div className="basis-1 md:basis-7/12 flex flex-col space-y-6">
          <div className="flex flex-row items-center justify-between p-2 lg:p-6 border border-slate-600 rounded-lg">
            <div className="flex flex-row space-x-2 lg:space-x-6 items-center">
              <img
                className="h-18 lg:h-30"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl lg:text-3xl font-medium">
                  Website Development
                </h2>
                {/* <p className="text-lg lg:text-xl text-slate-400">24+ Project</p> */}
              </div>
            </div>
            <i className="fa-solid fa-arrow-right text-xl lg:text-3xl font-medium"></i>
          </div>

          <div className="flex flex-row items-center justify-between p-2 lg:p-6 border border-slate-600 rounded-lg">
            <div className="flex flex-row space-x-2 lg:space-x-6 items-center">
              <img
                className="h-18 lg:h-30"
                src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl lg:text-3xl font-medium">
                  Website App Design
                </h2>
                {/* <p className="text-lg lg:text-xl text-slate-400">36+ Project</p> */}
              </div>
            </div>
            <i className="fa-solid fa-arrow-right text-xl lg:text-3xl font-medium"></i>
          </div>

          <div className="flex flex-row items-center justify-between p-2 lg:p-6 border border-slate-600 rounded-lg">
            <div className="flex flex-row space-x-2 lg:space-x-6 items-center">
              <img
                className="h-18 lg:h-30"
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl lg:text-3xl font-medium">
                  Mobile App Design
                </h2>
                {/* <p className="text-lg lg:text-2xl text-slate-400">
                  64+ Project
                </p> */}
              </div>
            </div>
            <i className="fa-solid fa-arrow-right text-xl lg:text-3xl font-medium"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
