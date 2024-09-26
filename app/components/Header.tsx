
// inspiration -> https://tailwindui.com/components/marketing/elements/headers
import logo from '../assets/JC.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { NavLink } from '@remix-run/react';
import DarkModeToggle from './DarkModeToggle'
import { useNavigation } from '@remix-run/react';

const navigationLinks = [
    { name: 'Home', to: '' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
]

export default function Header() {
    const navigation = useNavigation();

    return (
        <header>
            <Disclosure as="nav">
                <div className="flex items-center justify-between p-6 lg:px-8 border-b-4 border-black">
                    <div className="flex">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img alt="logo" src={logo} className="h-8 w-auto" />
                        </a>
                    </div>
                    <ul className='hidden lg:flex'>
                        {navigationLinks.map((item) => (
                            <li
                                key={item.name}
                                className='flex justify-center text-sm font-semibold leading-6 px-4 py-2'
                            >
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? `hover:text-green-600 border-green-600 border-b-2`
                                            : 'hover:text-green-600'
                                    }
                                    to={`${item.to}`}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <DarkModeToggle className='hidden lg:flex' />
                    <div className="flex lg:hidden z-10">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>

                <DisclosurePanel as="ul" className="lg:hidden space-y-1 px-2 pb-3 pt-2 flex flex-col absolute top-0 w-screen h-screen bg-slate-50/95">
                    {navigationLinks.map((item) => (
                        <li
                            key={item.name}
                            className='flex justify-center'
                        >
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? `hover:text-green-600 border-green-600 border-b-2 my-2`
                                        : 'hover:text-green-600 my-2'
                                }
                                to={`${item.to}`}
                            >
                                <DisclosureButton
                                    className="block rounded-md px-3 py-2 text-base font-medium"
                                >

                                    {item.name}
                                </DisclosureButton>
                            </NavLink>
                        </li>
                    ))}
                </DisclosurePanel>
            </Disclosure>
        </header>

    )
}