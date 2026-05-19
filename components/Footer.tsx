'use client';
import { Call02Icon, FacebookIcon, Instagram, Loading02Icon, Location01Icon, Mail02Icon, TiktokIcon, WhatsappIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { toast } from 'sonner';
import { api } from '@/lib/api';

const Footer = () => {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleNewsletterSubscription = async (e: FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      try {
        if (!email) {
            toast.error('Please enter your email!')
            return
        }
        const response = await api.post('/api/newsletter/', { email })
        console.log(response.data)
        toast.success('Subscribed successfully!')
        setEmail('')
      } catch (error) {
        console.error(error)
        toast.error('Failed to subscribe.')
      } finally {
        setIsSubmitting(false)
      }
    }

  return (
    <section className="w-full border-t border-[#0b2545]/3 bg-white py-20">
        <div className="w-full flex flex-wrap gap-10 lg:gap-0 lg:grid md:grid-cols-5">
            <div className="w-full md:col-span-1 lg:border-r border-border">
                <h1 className='text-xl text-secondary font-lato font-semibold mb-8'>Contact</h1>
                <div className="flex items-center gap-2 mb-5">
                    <HugeiconsIcon icon={Call02Icon} className='size-5 text-muted-foreground' />
                    <p className='text-muted-foreground text-sm'>+234 803 520 4747</p>
                </div>
                <div className="flex items-center gap-2 mb-5">
                    <HugeiconsIcon icon={Mail02Icon} className='size-5 text-muted-foreground' />
                    <p className='text-muted-foreground text-sm'>info@zeemahomes.com</p>
                </div>
                <div className="flex items-start gap-2 mb-8">
                    <HugeiconsIcon icon={Location01Icon} className='size-5 text-muted-foreground' />
                    <p className='text-muted-foreground text-sm lg:max-w-[150px]'>Suite J266 Road 5, Ikota SHopping Complex, VGC, Ajah</p>
                </div>

                <div className="flex gap-2">
                    <a href="">
                        <div className="bg-[#F2F2F2] rounded-[10px] size-[32px] flex items-center justify-center">
                            <HugeiconsIcon icon={WhatsappIcon} className='size-4 text-secondary' />
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-[#F2F2F2] rounded-[10px] size-[32px] flex items-center justify-center">
                            <HugeiconsIcon icon={FacebookIcon} className='size-4 text-secondary' />
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-[#F2F2F2] rounded-[10px] size-[32px] flex items-center justify-center">
                            <HugeiconsIcon icon={Instagram} className='size-4 text-secondary' />
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-[#F2F2F2] rounded-[10px] size-[32px] flex items-center justify-center">
                            <HugeiconsIcon icon={TiktokIcon} className='size-4 text-secondary' />
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-full md:col-span-1 lg:border-r border-border lg:px-8">
                <h1 className='text-xl text-secondary font-lato font-semibold mb-8'>Links</h1>
                <div className="flex flex-col">
                    <Link href='#' className='text-muted-foreground hover:text-secondary text-base mb-5'>Home</Link>
                    <Link href='#' className='text-muted-foreground hover:text-secondary text-base mb-5'>Buy</Link>
                    <Link href='#' className='text-muted-foreground hover:text-secondary text-base mb-5'>Sell</Link>
                    <Link href='#' className='text-muted-foreground hover:text-secondary text-base mb-5'>About</Link>
                    <Link href='#' className='text-muted-foreground hover:text-secondary text-base'>Contact</Link>
                </div>
            </div>
            <div className="w-full md:col-span-1 lg:border-r border-border lg:px-8">
                <h1 className='text-xl text-secondary font-lato font-semibold mb-8'>Location</h1>
                <div className="flex flex-col">
                    <p className='text-muted-foreground hover:text-secondary text-base mb-5'>Lagos</p>
                    <p className='text-muted-foreground hover:text-secondary text-base mb-5'>Abuja</p>
                    <p className='text-muted-foreground hover:text-secondary text-base mb-5'>Home Buying </p>
                    <p className='text-muted-foreground hover:text-secondary text-base mb-5'>Home Selling</p>
                    <p className='text-muted-foreground hover:text-secondary text-base'>Real Estate</p>
                </div>
            </div>
            <div className="col-span-2 lg:px-8">
                <h1 className='text-xl text-secondary font-lato font-semibold mb-8'>Subscribe</h1>
                <p className='text-muted-foreground hover:text-secondary text-base mb-5'>Sign Up for Our Newsletter to get Latest Updates and Offers</p>
                <div className="w-full flex items-center h-[50px] group overflow-hidden">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} className='w-[70%] h-full text-base font-lato text-secondary lg:border-r-none rounded-r-none focus-visible:ring-primary focus-visible:border-none outline-none focus-visible:outline-none' placeholder='Your email' />
                    <button onClick={handleNewsletterSubscription} className='w-[30%] h-full bg-primary text-white text-base font-lato font-bold rounded-l-none rounded-r-[10px] group-focus-within:border-2 border-primary flex items-center justify-center cursor-pointer'>
                    {
                        isSubmitting ? (
                            <HugeiconsIcon icon={Loading02Icon} className="w-4 h-4 animate-spin" />
                        ) : (
                            <p>Subscribe</p>
                        )
                    }
                    </button>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-20">
            <img src='/zeema-logo.png' alt='Zeema Homes Logo' className='w-[180px] lg:w-[220px]' />
            <p className='text-muted-foreground text-base lg:text-lg font-lato'>Building homes, Creating memories...</p>
        </div>
    </section>
  )
}

export default Footer