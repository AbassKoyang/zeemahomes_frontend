'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { usePropertyDetails } from '@/lib/queries';
import { Property } from '@/lib/types';
import { Bathtub01Icon, BedDoubleIcon, Calendar03Icon, Call02Icon, CancelCircleIcon, CheckCircle, GarageIcon, LandPlotIcon, Location01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const ListingClient = () => {
    const params = useParams();
    const slug = params.slug as string;
    const {data: property, isLoading, isError} = usePropertyDetails(slug);

  const statusLabel = {
    for_sale: "For Sale",
    for_rent: "For Rent",
    sold: "Sold",
    unavailable: "Unavailable",
  }[property?.status || 'for_rent'];

    const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

function getYouTubeId(url:string) {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

  return (
    <section className='relative w-full py-14 overflow-hidden'>
        {isLoading && (<div>Loading...</div>)}
        {isError && (<div>Error loading property details</div>)}
        {property && (
            <div className="w-full">
                <div className="w-full lg:flex items-start justify-between">
                    <div className="">
                        <h1 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight font-lato">
                            {property?.title}
                        </h1>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="py-1 px-2 text-sm font-lato border border-border rounded-[4px]">
                                {statusLabel}
                            </div>
                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                <HugeiconsIcon icon={Location01Icon} className="size-4" />
                                <span className="">{property?.city}, {property?.state}</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-[40px] font-mediuum text-primary font-lato">
                            {formatPrice(property?.price)}{property?.price_period !== "none" ? `/${property.price_period}` : '' }
                        </span>
                    </div>
                </div>



                <div className="w-full p-4 bg-white border-3 border-border rounded-[16px] grid-cols-1 grid-rows-2 lg:grid-rows-1 grid lg:grid-cols-3 gap-2 mt-10 h-[800px] lg:h-[400px]">
                    <div className="h-full col-span-1 row-span-1 lg:col-span-2 relative rounded-[8px] overflow-hidden">
                        <Image alt={property.title} src={property.images[0]} fill className='object-cover' />
                    </div>
                    <div className="h-full row-span-1 col-span-1 grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="col-span-1 row-span-1 relative rounded-[8px] overflow-hidden">
                            <Image alt={property.title} src={property.images[0]} fill className='object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-[8px] overflow-hidden">
                            <Image alt={property.title} src={property.images[0]} fill className='object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-[8px] overflow-hidden">
                            <Image alt={property.title} src={property.images[0]} fill className='object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-[8px] overflow-hidden">
                            {property.images.length > 5 && (
                                <div className="size-full absolute inset-0 z-100 bg-black/70 flex items-center justify-center">
                                    <div className="p-4 text-lg bg-secondary font-lato text-white  rounded-[10px]">
                                        <p>{property.images.length-5}</p>
                                    </div>
                                </div>
                            )}
                            <Image alt={property.title} src={property.images[0]} fill className='object-cover' />
                        </div>
                    </div>
                </div>



                <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 gap-10">
                    <div className="col-span-1 row-span-1 lg:col-span-2">
                        <h3 className='text-xl lg:text-[28px] font-lato text-secondary'>Overview</h3>
                        <div className="w-full border border-border p-[30px] rounded-[10px] flex items-center lg:justify-between flex-wrap gap-10 lg:gap-0 bg-white mt-[30px]">
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon icon={BedDoubleIcon} className="size-4 text-muted-foreground" />
                                    <p className="text-secondary text-lg font-medium font-lato">{property.bedrooms}</p>
                                </div>
                                <p className='text-sm font-lato text-muted-foreground mt-1'>Bedrooms</p>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon icon={Bathtub01Icon} className="size-4 text-muted-foreground" />
                                    <p className="text-secondary text-lg font-medium font-lato">{property.bathrooms}</p>
                                </div>
                                <p className='text-sm font-lato text-muted-foreground mt-1'>Bathrooms</p>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon icon={GarageIcon} className="size-4 text-muted-foreground" />
                                    <p className="text-secondary text-lg font-medium font-lato">{property.garages}</p>
                                </div>
                                <p className='text-sm font-lato text-muted-foreground mt-1'>Garages</p>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon icon={Calendar03Icon} className="size-4 text-muted-foreground" />
                                    <p className="text-secondary text-lg font-medium font-lato">{property.year_built}</p>
                                </div>
                                <p className='text-sm font-lato text-muted-foreground mt-1'>Year Built</p>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <HugeiconsIcon icon={LandPlotIcon} className="size-4 text-muted-foreground" />
                                    <p className="text-secondary text-lg font-medium font-lato">{property.area_size}</p>
                                </div>
                                <p className='text-sm font-lato text-muted-foreground mt-1'>Area Size</p>
                            </div>
                        </div>

                        <div className="w-full bg-white border border-border p-[30px] rounded-[10px] mt-[30px]">
                            <p className='text-base font-lato text-muted-foreground'>{property.overview}</p>
                        </div>

                        <div className="w-full bg-white border border-border p-[30px] rounded-[10px] mt-[30px] flex items-center lg:justify-between flex-wrap gap-10 lg:gap-0">
                            <div className="flex items-center gap-1">
                                {property.has_hvac ? (
                                    <HugeiconsIcon icon={CheckCircle} className="size-4 text-primary" />
                                ):(
                                    <HugeiconsIcon icon={CancelCircleIcon} className="size-4 text-muted-foreground" />
                                )}
                                <p className='text-sm font-lato text-muted-foreground'>HVAC</p>
                            </div>
                            <div className="flex items-center gap-1">
                                {property.has_cinema ? (
                                    <HugeiconsIcon icon={CheckCircle} className="size-4 text-primary" />
                                ):(
                                    <HugeiconsIcon icon={CancelCircleIcon} className="size-4 text-muted-foreground" />
                                )}
                                <p className='text-sm font-lato text-muted-foreground'>Cinema</p>
                            </div>
                            <div className="flex items-center gap-1">
                                {property.has_swimming_pool ? (
                                    <HugeiconsIcon icon={CheckCircle} className="size-4 text-primary" />
                                ):(
                                    <HugeiconsIcon icon={CancelCircleIcon} className="size-4 text-muted-foreground" />
                                )}
                                <p className='text-sm font-lato text-muted-foreground'>Swimming Pool</p>
                            </div>
                            <div className="flex items-center gap-1">
                                {property.has_laundry ? (
                                    <HugeiconsIcon icon={CheckCircle} className="size-4 text-primary" />
                                ):(
                                    <HugeiconsIcon icon={CancelCircleIcon} className="size-4 text-muted-foreground" />
                                )}
                                <p className='text-sm font-lato text-muted-foreground'>Laundry</p>
                            </div>
                        </div>

                        {
                            property.video_url && (
                                <div className='w-full mt-[30px]'>
                                    <iframe
                                    className='w-full h-[400px] rounded-[10px] overflow-hidden' 
                                    src={`https://www.youtube.com/embed/${getYouTubeId(property.video_url)}`} 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    >
                                    </iframe>
                                </div>
                            )
                        }
                    </div>

                     <div className="col-span-1 row-span-1 border border-border p-[30px] rounded-[10px] bg-white h-fit">
                        <div className="w-full">
                            <h1 className="text-lg md:text-xl font-medium text-secondary tracking-tight font-lato">
                                {property?.title}
                            </h1>
                            <div className="flex items-center gap-4 mt-3">
                                <div className="bg-primary text-white py-1 px-2 text-xs font-lato border border-border rounded-[4px]">
                                   <p> {statusLabel}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                    <HugeiconsIcon icon={Location01Icon} className="size-4" />
                                    <span className="">{property?.city}, {property?.state}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-3xl font-medium text-primary">
                                {formatPrice(property.price)} 
                                {property.price_period !== "none" && (
                                    <span className="text-xs font-medium text-muted-foreground lowercase">
                                     /{property.price_period}
                                    </span>
                                )}
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-border">
                                <h5 className="text-base md:text-lg font-medium text-secondary tracking-tight font-lato">
                                    Contact Us Now!
                                </h5>

                                <div className="p-3 rounded-[10px] bg-[#F2F2F2] mt-3">
                                    <div className="flex items-center gap-3">
                                        <Avatar className='size-12 after:border-2!'>
                                            <AvatarImage src='/work-with-us-1.png' />
                                            <AvatarFallback>IO</AvatarFallback>
                                        </Avatar>
                                        <div className="">
                                            <h4 className="text-lg font-semibold text-secondary">Ibrahim Odu</h4>
                                            <div className="flex items-center gap-1">
                                                <HugeiconsIcon icon={Call02Icon} className='size-4 text-secondary' />
                                                <p className='text-secondary text-xs'>+234 803 520 4747</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 flex items-center justify-between'>
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            className="w-[47%] border-secondary text-secondary hover:bg-secondary hover:text-white transition-all font-bold rounded-lg p-4 cursor-pointer"
                                        >
                                            Call Now
                                        </Button>

                                        <Button 
                                            size="sm"
                                            className="w-[47%] text-white transition-all font-bold rounded-lg p-4 cursor-pointer"
                                        >
                                            Book Inspection
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default ListingClient