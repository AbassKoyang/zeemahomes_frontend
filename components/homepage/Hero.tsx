'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from '@hugeicons/react'
import SearchBar from "./SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <section className="relative w-full pt-4 pb-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 py-4">
          {/* Left Content */}
          <div className="flex-1 space-y-5 text-center lg:text-left font-lato">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-secondary tracking-tight lg:mt-14">
              <span className=";g:tracking-wide">BUY YOUR NEXT</span> <br />
              PERFECT <span className="text-primary uppercase">PLACE</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-xl font-medium max-w-lg mx-auto lg:mx-0">
              More than 500+ house available for sale & rent
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white h-16 px-10 rounded-[7px] text-lg font-bold group transition-all shadow-lg shadow-primary/20"
              >
                Browse Home
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/30 text-secondary h-16 px-10 rounded-[7px] text-lg font-bold bg-[#F4FBFF] hover:bg-primary/5 hover:border-primary transition-all"
              >
                <HugeiconsIcon icon={HelpCircleIcon} className="mr-2 size-6" />
                Make Enquiries
              </Button>
            </div>

            {/* Partners */}
            <div className="pt-5">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-14">
                <Image src="/partner-1.png" alt="Partner 1" width={90} height={45} className="" />
                <Image src="/partner-2.png" alt="Partner 2" width={90} height={45} className="" />
                <Image src="/partner-3.png" alt="Partner 3" width={90} height={45} className="" />
                <Image src="/partner-4.png" alt="Partner 4" width={40} height={40} className="" />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative aspect-square w-full max-w-[550px] max-h-[450px] ml-auto">
                <div className="relative h-full w-full">
                <Image
                    src="/hero-house-image.png"
                    alt="Modern House"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                />
                
                {/* Agent Card Overlay */}
                <div className="absolute bottom-0 right-0 w-[95%] lg:w-[70%]  bg-transparent">
                    <div className="relative size-full p-6 text-white rounded-tl-[60px] overflow-hidden">
                        <div className="size-full absolute top-0 left-0 bg-linear-to-r from-[#02ACF9] to-[#002D4F] blur-xs opacity-80"></div>
                        <div className="flex items-center gap-4 z-200">
                            <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <Image src="/partner-1.png" alt="Agent" fill className="object-cover bg-white p-1" />
                            </div>
                            <div className="relative">
                                <h4 className="text-base font-bold tracking-tight">Agba Emmanuel</h4>
                                <p className="text-[10px] text-white mt-0.5 max-w-[200px]">Zeema helped me secure my dream home at an affordable rate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Agent Card Overlay 2 */}
                <div className="absolute bottom-35 right-0 w-[90%] lg:w-[50%] bg-transparent animate-[float_6s_ease-in-out_infinite]">
                    <div className="relative size-full p-6 text-white rounded-tl-[60px] rounded-bl-[60px] overflow-hidden"> 
                        <div className="size-full absolute top-0 left-0 bg-linear-to-r from-[#02ACF9] to-[#002D4F] blur-xs opacity-80"></div>
                        <div className="flex items-center gap-4 z-200">
                            <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <Image src="/partner-1.png" alt="Agent" fill className="object-cover bg-white p-1" />
                            </div>
                            <div className="relative">
                                <h4 className="text-base font-bold tracking-tight">Agba Emmanuel</h4>
                                <p className="text-[10px] text-white mt-0.5 max-w-[200px]">Zeema helped me secure my dream home at an affordable rate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Floating Search Bar */}
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;