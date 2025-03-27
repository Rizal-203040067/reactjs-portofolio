import React, { useState } from "react";

export default function Navbar() {
  const [sidebarModal, setSidebarModal] = useState(false);

  function toggleSidebar() {
    setSidebarModal(!sidebarModal);
  }

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-16">
        <a className="flex items-center space-x-3">
          <span className="capitalize self-center text-2xl font-semibold whitespace-nowrap">
            Raizell
          </span>
        </a>

        {/* Navbar */}
        <button onClick={toggleSidebar} className="md:hidden">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        <div className="hidden md:flex flex-row">
          <ul className="font-medium flex flex-row p-0 mt-0 space-x-8">
            {["Service", "Portofolio", "Contact", "About"].map((navSection) => (
              <li key={navSection}>
                <a
                  href=""
                  className="block p-0 rounded-sm hover:bg-transparent hover:text-sky-400">
                  {navSection}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed z-50 inset-y-0 right-0 w-52 bg-slate-900 shadow-md transform ${
            sidebarModal ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}>
          <button onClick={toggleSidebar} className="p-4">
            <i className="fa-solid fa-times text-2xl"></i>
          </button>

          <div className="border-t border-t-gray-200">
            <ul className="font-medium flex flex-col m-2 p-2 rounded-lg">
              {["Service", "Portofolio", "Contact", "About"].map(
                (navSection) => (
                  <li key={navSection}>
                    <a
                      href="#"
                      className="block py-2 text-lg text-white rounded-sm hover:bg-gray-200 hover:text-sky-900 transition">
                      {navSection}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {sidebarModal && (
        <div
          className="fixed z-40 inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}></div>
      )}
    </nav>
  );
}
