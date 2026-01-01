import logo from "../assets/JC_logo_s50.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router";
import { useRef, useEffect } from "react";

const navigationLinks = [
  { name: "Home", to: "" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    dialogRef.current?.showModal();
  };

  const closeMenu = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleEscape = (e: Event) => {
      if ((e as KeyboardEvent).key === "Escape") {
        closeMenu();
      }
    };

    dialog.addEventListener("close", handleEscape);
    return () => dialog.removeEventListener("close", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-50 shadow-md">
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b-2 xl:border-x-2 border-black">
        <div className="flex">
          <Link to="">
            <img alt="logo" src={logo} className="h-12 w-auto" />
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {navigationLinks.map((item) => (
            <li
              key={item.name}
              className="flex justify-center text-sm font-semibold leading-6 px-4 py-2"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `hover:text-green-600 border-green-600 border-b-2`
                    : "hover:text-green-600"
                }
                to={`${item.to}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-12 h-12" />
        <div className="flex lg:hidden">
          <button
            onClick={openMenu}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            aria-label="Open main menu"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <dialog
        ref={dialogRef}
        className="lg:hidden w-full h-full max-w-full max-h-full m-0 bg-slate-50"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6">
            <div className="w-12 h-12" />
            <h2 className="text-lg font-semibold">
              Navigation Menu
            </h2>
            <button
              onClick={closeMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
              aria-label="Close menu"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <ul className="space-y-2 px-6 pb-3 pt-2 flex flex-col">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `block w-full text-center px-4 py-3 text-base font-semibold border-l-6 border-green-600 hover:bg-slate-100 hover:text-green-600`
                      : "block w-full text-center px-4 py-3 text-base font-medium border-2 border-transparent hover:bg-slate-100 hover:text-green-600"
                  }
                  to={`${item.to}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </header>
  );
}
