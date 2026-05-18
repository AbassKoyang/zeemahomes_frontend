'use client';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const WorkWithus = () => {
    const router = useRouter()
    
  return (
    <section className="w-full py-20">
        <div className='bg-secondary rounded-[16px] px-[47px] py-[61px] grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-8 relative'>
            <div className="row-span-1 col-span-1 lg:col-span-1 flex flex-col justify-center">
                <div className="text-left mb-[30px] space-y-4 font-lato">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight capitalize">
                        Work With us
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto font-normal text-sm">
                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                    </p>
                </div>
                <Button 
                onClick={() => router.push('/contact')} 
                    className="w-fit bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
                    >
                    Work With Us
                    <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 lg:size-6 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
            <div className="col-span-1">
                <div className="flex items-center gap-5">
                    <div className="relative w-[177.493px] lg:w-[217.853px] h-[193.458px] lg:h-[237.448px]">
                        <Image src="/work-with-us-1.png" alt="Work with us" fill className="size-full" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="relative w-[123.964px] lg:w-[152.151px] h-[107.999px] lg:h-[132.556px]">
                            <Image src="/work-with-us-2.png" alt="Work with us" fill className="size-full" />
                        </div>
                        <div className="relative w-[123.964px] lg:w-[152.151px] h-[107.999px] lg:h-[132.556px]">
                            <Image src="/work-with-us-3.png" alt="Work with us" fill className="size-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-1">
                <div className="flex items-center gap-5">
                    <div className="relative w-[177.493px] lg:w-[217.853px] h-[193.458px] lg:h-[237.448px]">
                        <Image src="/work-with-us-4.png" alt="Work with us" fill className="size-full" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="relative w-[123.964px] lg:w-[152.151px] h-[107.999px] lg:h-[132.556px]">
                            <Image src="/work-with-us-5.png" alt="Work with us" fill className="size-full" />
                        </div>
                        <div className="relative w-[123.964px] lg:w-[152.151px] h-[107.999px] lg:h-[132.556px]">
                            <Image src="/work-with-us-6.png" alt="Work with us" fill className="size-full" />
                        </div>
                    </div>
                </div>
            </div>

            <img src='/work-with-us-pattern.png' className='absolute top-0 left-0' alt='pattern' />
        </div>
    </section>
  )
}

export default WorkWithus