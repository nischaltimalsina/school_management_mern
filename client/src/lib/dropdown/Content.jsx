import React from "react";
import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Content = ({link, children,className}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
      <Menu.Item>
        {({ active }) => (
          <NavLink
            href={link}
            className={classNames(
              active ? "bg-neutral-200 text-gray-900" : "text-gray-700",
              `block text-sm rounded-lg ${className}`
              
            )}
          >
            {children}
          </NavLink>
        )}
      </Menu.Item>
  );
};

export default Content;
