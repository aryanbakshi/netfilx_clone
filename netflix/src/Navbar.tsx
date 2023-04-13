import React from 'react';
import NavbarItem from './NavbarItem.tsx';
import logo from './logo.png';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
        return (
            <nav className="w-full fixed z-40">
                    <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${Navbar ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                            <img src={logo} className="h-4 lg:h-7" alt="Logo" />
                            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                                    <NavbarItem label="Home" active />
                                    <NavbarItem label="Series" />
                                    <NavbarItem label="Films" />
                                    <NavbarItem label="New & Popular" />
                                    <NavbarItem label="My List" />
                                    <NavbarItem label="Browse by Languages" />
                            </div>
                            <div onClick={ () => {} } className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                                    <p className="text-white text-sm">Browse</p>
                                    <ChevronDownIcon className={`w-4 text-white fill-white transition ${Navbar ? 'rotate-180' : 'rotate-0'}`} />

                            </div>
                            <div className="flex flex-row ml-auto gap-7 items-center">
                                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                                            <MagnifyingGlassIcon className="w-6" />
                                    </div>
                                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                                            <BellIcon className="w-6" />
                                    </div>
                            </div>
                            <div onClick={ () => {} } className="flex flex-row items-center gap-2 cursor-pointer relative">
                                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                                            <img src="default-blue.png" alt="" />
                                    </div>
                                    <ChevronDownIcon className={`w-4 text-white fill-white transition ${Navbar ? 'rotate-180' : 'rotate-0'}`} />

                            </div>
                    </div>
            </nav>
        )
}


export default Navbar;