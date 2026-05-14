'use client';
import { useSearchProperties } from '@/lib/queries'
import { Property } from '@/lib/types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PropertyPreviewCard from '../homepage/PropertyPreviewCard'
import { Skeleton } from '../ui/skeleton'
import { HugeiconsIcon } from '@hugeicons/react';
import { Loading } from '@hugeicons/core-free-icons';


const Properties = () => {
    const p = useSearchParams();
    const [params, setParams] = useState(p)

    const { ref, inView } = useInView();

    const {data: properties, 
        isLoading, 
        isError,
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage
    } = useSearchProperties(params);

    useEffect(() => {
        if (inView && hasNextPage) {
          fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    const allProperties = useMemo(() => {
        return properties?.pages?.flatMap(page => page.results) ;
    }, [properties]);

    console.log(allProperties)

  return (
    <div className=" w-full mt-14">
        {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="aspect-4/5 rounded-2xl" />
            ))}
          </div>
        )}

        {isError && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">Failed to load properties. Please try again later.</p>
          </div>
        )}

        {allProperties && allProperties.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property: Property) => (
                <PropertyPreviewCard key={property.id} property={property} />
            ))}
            </div>
        )}
        {allProperties && allProperties.length < 1 && (
             <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">No properties found at the moment.</p>
          </div>
        )}
        <div ref={ref} className="w-full flex items-center justify-center mt-6">
            {isFetchingNextPage && <HugeiconsIcon icon={Loading} className="size-5 animate-spin text-primary" />}
        </div>
    </div>
  )
}

export default Properties