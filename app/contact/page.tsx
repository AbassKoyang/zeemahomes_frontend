
import Image from 'next/image'
import { FacebookIcon, Instagram, TiktokIcon, WhatsappIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import ContactUsForm from '@/components/ContactUsForm'

const page = () => {
  return (
    <div className='relative w-full py-14 overflow-hidden'>
        <h1 className='text-3xl lg:text-[48px] font-semibold font-lato text-secondary mb-5'>Contact <span className='text-primary'>Us</span></h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16 ">
            <div className="col-span-1 h-fit">
                <div className="w-full h-[400px] lg:h-[550px] relative border-5 border-primary rounded-[10px]">
                    <Image src='/contact-us.jpeg' alt='Contact Us' fill className='object-cover' />
                </div>
            </div>
            <div className="col-span-1 p-[30px] rounded-[10px] shadow-sm border border-border bg-white">
                <h2 className='text-2xl lg:text-[40px] font-semibold font-lato text-secondary text-center'>Get In Touch</h2>
                <p className='text-xs lg:text-sm text-muted-foreground font-lato text-center'>Please enter your details and tell us about your dream home</p>
                <ContactUsForm />
            </div>
        </div>

        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-16">
            <div className="col-span-1">
               <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato capitalize">
                Connecting near or far?
                </h2>
                <p className='text-sm text-muted-foreground font-lato mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur, non venenatis elit blandit. Mauris vehicula, libero a iaculis fringilla, ipsum ipsum tincidunt velit, ut convallis velit ante tincidunt dui.</p>
                <div className="flex flex-col gap-6 mt-[30px]">
                    <p className='text-sm lg:text-base text-muted-foreground font-lato'>Address:<span className='font-medium'> Suite J266 Road 5, Ikota Shopping Complex, VGC, Ajah</span></p>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato'>Mobile:<span className='font-medium'> (+234) 803-520-4747</span></p>
                    <p className='text-sm lg:text-base text-muted-foreground font-lato'>Email:<span className='font-medium'> info@zeemahomes.com</span></p>
                </div>
                <div className="flex items-center gap-2 mt-[30px]">
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
            <div className='col-span-1'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4575192118423!2d3.5545149236494096!3d6.463576123859588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7b479f5a0a3%3A0x71d6c64b9407ea08!2sZeema%20Homes%20LTD!5e0!3m2!1sen!2sng!4v1779032947388!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default page