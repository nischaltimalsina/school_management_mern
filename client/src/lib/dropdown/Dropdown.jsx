import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Dropdown = ({ icon , children, className}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={"flex items-center"}>{icon}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={` ${className} absolute right-0 z-10 mt-2  origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
        <div className="">
          {children}
        </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
