import Image from 'next/image'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='relative w-full py-14 overflow-hidden'>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16">
            <div className="col-span-1 row-span-1">
                <h1 className='text-6xl font-semibold font-lato text-secondary uppercase'>about us: <span className='text-primary'>zeema</span></h1>
                <div className="w-full h-[200px] lg:h-[300px] relative border-5 border-primary mt-3">
                    <Image src='/about-us-1.jpeg' alt='About Us' fill className='object-cover' />
                </div>
            </div>
            <div className="col-span-1 row-span-1">
                <p className='text-sm lg:text-base text-muted-foreground font-lato'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br/>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...<br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...
                    <br/>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim...
                </p>
            </div>
        </div>

        <div className="py-20 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-20">
            <div className="col-span-1 row-span-1 p-7 pl-12 border border-border rounded-[16px] bg-white h-fit">
                <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato">
                    Our Story
                </h2>
                <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                    RealPro is proud to be a trusted leader in real estate, offering comprehensive solutions and professional services in the property industry. With over 10 years of experience, we continue to grow and innovate, upholding a tradition of quality and reliability.
                </p>
                <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                    At RealPro, we are committed to putting clients first, dedicated to helping them find their dream homes or valuable investment opportunities. Our team of seasoned experts is always ready to share deep market insights and knowledge to provide clients with the best options available.
                </p>
                <p className='text-sm lg:text-base text-muted-foreground font-lato mt-3'>
                    RealPro is more than just a real estate company – we are a reliable partner, walking with you every step of the way in building your home and growing your investments with confidence.
                </p>
                <Button 
                    className="mt-5 w-fit bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
                    >
                    Work With Us
                    <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 lg:size-6 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
            <div className="col-span-1 row-span-1">
                <div className="w-[532px] h-[200px] lg:h-[520px] relative">
                    <Image src='/about-us-2.png' alt='About Us' fill className='object-start size-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page