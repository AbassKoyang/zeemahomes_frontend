'use client';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {useState} from 'react'
import { Button } from './ui/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type NavItemsProp = {
    label: string;
    url: string
}

const Header = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

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
            url: '/blogs'
        },
    ]

    useGSAP(() => {
         gsap.fromTo(
            '.navbar',
            {
              y: -100,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: 'power2.inOut',
            }
          );
    }, [])
  return (
    <header className='navbar w-full fixed left-0 top-6 z-10000 px-4 md:px-0 flex items-center justify-center'>
        <div className='w-full max-w-7xl px-4 lg:px-[22px] py-2.5 lg:py-4 rounded-[8px] bg-[#F4FBFF]  border border-[#CFEDFB]'>
    <div className='w-full flex items-center justify-between'>
        <Link href="/">
            <img src='/zeema-logo.png' alt='Zeema Homes Logo' className='w-[180px]' />
        </Link>

        <ul className='hidden lg:flex items-center gap-5'>
            {NavItems.map((item) => (
                <li>
                    <Link href={item.url} className={`text-base font-medium font-lato ${item.url == pathname ? 'text-primary' : 'text-secondary'}`}>
                            <p>{item.label}</p>
                    </Link>
                </li>
            ))}
        </ul>

        <Link href='/contact' className='hidden lg:block text-sm px-[24px] py-[10px] bg-primary rounded-[4px] text-white font-bold font-lato'>
            Contact Us
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className='flex lg:hidden flex-col items-center justify-center gap-1'>
            <div className={`w-[20px] h-[2px] bg-primary rounded-sm ${isOpen ? 'rotate-45' : 'rotate-0'} transition-all duration-300 ease-in-out`}></div>
            <div className={`w-[20px] h-[2px] bg-primary rounded-sm ${isOpen ? '-rotate-45' : 'rotate-0'} transition-all duration-300 ease-in-out`}></div>
            <div className={`w-[20px] h-[2px] bg-primary rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        </button>
    </div>

        {/* Mobile nav */}

        <div className={`w-full lg:hidden ${isOpen ? 'h-[220px] pt-5' : 'h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <ul className='w-full flex flex-col items-center gap-3'>
                {NavItems.map((item) => (
                    <li>
                         <button onClick={() => {setIsOpen(false); router.push(item.url)}} className={`p-0 text-base font-sembibold font-lato ${item.url == pathname ? 'text-primary' : 'text-secondary'}`}>
                        <p>{item.label}</p>
                    </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => {setIsOpen(false); router.push('/contact')}} className='mt-5 w-full text-sm px-[24px] py-[10px] bg-primary rounded-[4px] text-white font-bold font-lato flex items-cenetr justify-center'>
            Contact Us
            </button>
        </div>
    </div>
    </header>
  )
}

export default Header