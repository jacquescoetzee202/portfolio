
// inspiration -> https://tailwindui.com/components/marketing/elements/headers
import logo from '../assets/JC.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState } from 'react';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About Me', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

/* TODO:
- use the remix inbuilt link highlighting
- tap into theming for colours
- use dark and light mode color classes
*/

export default function Header() {
    return (
        <header className='bg-white'>
            <Disclosure as="nav">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b-4 border-black">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img alt="logo" src={logo} className="h-8 w-auto" />
                        </a>
                    </div>
                    {/* put the links for desktop view here */}
                    <div className="flex lg:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    {/* put the dark light mode logo here for desktop */}
                </div>

                <DisclosurePanel as="ul" className="lg:hidden space-y-1 px-2 pb-3 pt-2 flex flex-col">
                        {navigation.map((item) => (
                            <li 
                                key={item.name}
                                className='flex justify-center'
                            >
                                <DisclosureButton
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className="block rounded-md px-3 py-2 text-base font-medium"
                                // className={classNames(
                                //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                //     'block rounded-md px-3 py-2 text-base font-medium',
                                // )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            </li>
                        ))} 
                </DisclosurePanel>
            </Disclosure>
        </header>

    )
}