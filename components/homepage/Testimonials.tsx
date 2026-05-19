'use client';
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import { ChevronLeft, ChevronRight } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [canScrollNext, setCanScrollNext] = useState(true)
    const [canScrollPrev, setCanScrollPrev] = useState(false)


    useEffect(() => {
    if (!api) return

    const checkEdges = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    checkEdges()

    api.on("select", checkEdges)
    api.on("reInit", checkEdges)
  }, [api])

  const testimonials = [
    {
        name: "Godswill Jonathan",
        testimony: "Zeema Homes made my home-buying experience smooth and stress-free. Their team was professional, responsive, and helped me find the perfect property within my budget",
        image: "/partner-1.png",
        title: "Product Designer"
    },
    {
        name: "Joke Akinlasa",
        testimony: "I was impressed by how transparent and reliable the entire process was. From inspection to documentation, everything was handled professionally.",
        image: "/partner-1.png",
        title: "Virtual Assistant"
    },
    {
        name: "John Doe",
        testimony: "Finding a secure investment property in Lagos felt overwhelming until I worked with Zeema Homes. They truly understand the market and care about their clients..",
        image: "/partner-1.png",
        title: "Business Man"
    },
    {
        name: "Chioma Eze",
        testimony: "Zeema Homes helped me secure a beautiful apartment in a great neighborhood without unnecessary stress. Their professionalism and honesty stood out throughout the entire process.",
        image: "/partner-1.png",
        title: "Business Owner"
    },
    {
        name: "Mr. Yusuf Lawal",
        testimony: "I had been searching for a reliable real estate company for months before discovering Zeema Homes. They guided me properly, answered all my questions, and helped me make a confident investment decision.",
        image: "/partner-1.png",
        title: "Entrepreneur"
    },
  ]

  return (
    <section className="py-20 bg-transparent font-lato">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
            What Our Clients <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Discover what our clients say about us
          </p>
        </div>

        <div className="w-full flex items-center justify-end mt-16 mb-5 z-20">
            <div className="flex items-center gap-2">
                <button disabled={!canScrollPrev} onClick={() => api && api.scrollPrev()} className='size-[40px] bg-[#F8F8F8] rounded-full flex items-center justify-center cursor-pointer disabled:opacity-60'>
                  <HugeiconsIcon icon={ChevronLeft} className='text-[#333333] size-[18px]' />
                </button>
                <button disabled={!canScrollNext} onClick={() => api && api.scrollNext()} className='size-[40px] bg-[#F8F8F8] rounded-full flex items-center justify-center cursor-pointer disabled:opacity-60'>
                  <HugeiconsIcon icon={ChevronRight} className='text-[#333333] size-[18px]' />
                </button>
            </div>
        </div>
        <Carousel
        setApi={setApi}
        opts={{
            align: "start",
        }}
        className="w-full z-20"
        draggable
        >
        <CarouselContent>
            {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
                <TestimonialCard  name={testimonial.name} testimony={testimonial.testimony} image={testimonial.image} title={testimonial.title} />
            </CarouselItem>
            ))}
        </CarouselContent>

        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials