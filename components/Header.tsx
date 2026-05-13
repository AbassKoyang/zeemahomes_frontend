'use client';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

type NavItemsProp = {
    label: string;
    url: string
}

const Header = () => {
    const pathname = usePathname()

    const NavItems : NavItemsProp[] = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'Listings',
            url: '/listings'
        },
        {
            label: 'Blog',
            url: '/blog'
        },
    ]
  return (
    <div className='w-full px-[22px] py-4 rounded-[8px] bg-[#F4FBFF] flex items-center justify-between border border-[#CFEDFB]'>
        <img src='/zeema-logo.png' alt='Zeema Homes Logo' className='w-[180px]' />

        <ul className='hidden lg:flex items-center gap-5'>
            {NavItems.map((item) => (
                <li>
                    <Link href={item.url} className={`text-base font-bold font-lato ${item.url == pathname ? 'text-primary' : 'text-secondary'}`}>
                        <p>{item.label}</p>
                    </Link>
                </li>
            ))}
        </ul>

        <Link href='/contact' className='text-sm px-[24px] py-[10px] bg-primary rounded-[4px] text-white font-bold font-lato'>
            Contact Us
        </Link>
    </div>
  )
}

export default Header