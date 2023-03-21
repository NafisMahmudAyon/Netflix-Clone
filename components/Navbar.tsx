import React, { useCallback, useEffect, useState } from 'react';

import NavbarItem from "./NavbarItem";
import MobileMenu from '@/components/MobileMenu';

import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';



const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
      }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
                <img className="h-4 lg-h-7" src='/images/logo.png' alt="logo" />
                <div className="flex-row ml-8 gap-7 justify-end hidden lg:flex">
                    <NavbarItem label='Home' />
                    <NavbarItem label='Hollywood' />
                    <NavbarItem label='Bollywood' />
                    <NavbarItem label='South Indian Movie' />
                    <NavbarItem label='TV Sreies - Hindi' />
                    <NavbarItem label='TV Sreies - English' />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <ChevronDownIcon className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;