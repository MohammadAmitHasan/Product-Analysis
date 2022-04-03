import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-slate-900'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden ml-auto mr-2'>
                {open ? <XIcon className='text-red-100'></XIcon> : <MenuIcon className='text-red-100'></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static w-full duration-500 ease-in ${open ? 'top-10' : 'top-[-220px]'}`}>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/reviews'}>REVIEWS</CustomLink>
                <CustomLink to={'/dashboard'}>DASHBOARD</CustomLink>
                <CustomLink to={'/blogs'}>BLOGS</CustomLink>
            </ul>
        </nav>
    );
};

export default Header;