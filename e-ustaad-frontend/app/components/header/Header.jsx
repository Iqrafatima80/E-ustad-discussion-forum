import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faGauge } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <nav className="h-16 border">
      <div className="flex items-center justify-between h-full px-2 md:px-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold">E-USTAAD</h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[55%] hidden lg:block">
            <Link href="/questions">
              <Button>
                <div className="flex items-center gap-2">
                  <div>
                    <FontAwesomeIcon icon={faCirclePlus} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ask A Question</p>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="hidden text-2xl lg:block">
            <FontAwesomeIcon icon={faBell} color="gray" />
          </div>
          <div class="relative inline-block text-left">
            <div onClick={handleDropdown}>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <div class="w-9 h-9 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                  <Image
                    width={9}
                    height={9}
                    src="/bunny.jpeg"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
                <svg
                  class="-mr-1 mt-2 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {openDropdown && (
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        {/*<FontAwesomeIcon icon={faGauge} color="white"/>*/}
      </div>
    </nav>
  );
};

export default Header;