import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
const notFound = () => {
  return (
    <div className='w-full h-screen relative flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                    Page Not <span className="text-primary">Found</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
                    Opps! We couldn't find what you're looking for.
                </p>
            </div>
            <Link href="/" passHref>
                <Button 
                    className="bg-primary hover:bg-primary/90 text-white h-14 px-10 rounded-[7px] text-base font-bold shadow-lg shadow-primary/20 group transition-all"
                >
                    Go Home
                    <HugeiconsIcon 
                    icon={ArrowRight01Icon} 
                    className="ml-2 size-5 transition-transform group-hover:translate-x-1" 
                    />
                </Button>
                </Link>
        </div>
    </div>
  )
}

export default notFound