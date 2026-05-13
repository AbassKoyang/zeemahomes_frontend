"use client";

import React from "react";
import Link from "next/link";
import { useFetchFeaturedProperties } from "@/lib/queries";
import PropertyPreviewCard from "./PropertyPreviewCard";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Property } from "@/lib/types";

const LatestProperties = () => {
  const { data: properties, isLoading, isError } = useFetchFeaturedProperties();

  return (
    <section className="py-20 bg-transparent font-lato">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
            Our Latest <span className="text-primary">Properties</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
            Discover our curated selection of top-rated properties across the most sought-after locations.
          </p>
        </div>

        {/* Properties Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">Failed to load properties. Please try again later.</p>
          </div>
        ) : properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property: Property) => (
              <PropertyPreviewCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">No properties found at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href="/listings" passHref>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white h-14 px-10 rounded-[7px] text-base font-bold shadow-lg shadow-primary/20 group transition-all"
            >
              See All Properties
              <HugeiconsIcon 
                icon={ArrowRight01Icon} 
                className="ml-2 size-5 transition-transform group-hover:translate-x-1" 
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
