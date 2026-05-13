"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BedDoubleIcon,
  Bathtub01Icon,
  SquareIcon,
  Location01Icon,
  LandPlotIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

interface PropertyPreviewCardProps {
  property: Property;
}

const PropertyPreviewCard = ({ property }: PropertyPreviewCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const statusLabel = {
    for_sale: "For Sale",
    for_rent: "For Rent",
    sold: "Sold",
    unavailable: "Unavailable",
  }[property.status];

  const statusVariant = {
    for_sale: "default",
    for_rent: "secondary",
    sold: "destructive",
    unavailable: "outline",
  }[property.status] as any;

  return (
    <div className="group bg-white rounded-[16px] overflow-hidden border border-[#E5EBEE] hover:shadow-sm transition-all duration-300 flex flex-col h-full p-3 font-lato">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
        <Image
          src={property.images[0] || "/property-placeholder.png"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant={statusVariant}
            className="px-3! py-2! text-xs font-bold uppercase rounded-md shadow-sm text-white"
          >
            {statusLabel}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col flex-1 gap-4 my-2">
        <div>
          <h3 className="text-lg font-semibold text-secondary line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-1 text-sm">
            <HugeiconsIcon icon={Location01Icon} className="size-4" />
            <span className="line-clamp-1">{property.city}, {property.state}</span>
          </div>
        </div>

        {/* Specs */}
        <div className="w-full flex items-center justify-between py-4 border-y border-gray-50 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={BedDoubleIcon} className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium">{property.bedrooms} Bed</span>
          </div>
          <div className="w-px h-4 bg-[#E0E0E0]"></div>
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Bathtub01Icon} className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium">{property.bathrooms} Bath</span>
          </div>
            <div className="w-px h-4 bg-[#E0E0E0]"></div>
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={LandPlotIcon} className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium">{property.area_size} sqft</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-[#E0E0E0]">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(property.price)}
            </span>
            {property.price_period !== "none" && (
                <span className="text-xs font-medium text-muted-foreground lowercase">
                  /{property.price_period}
                </span>
              )}
          </div>
          <Link href={`/listings/${property.slug}`} passHref>
            <Button 
              variant="outline" 
              size="sm"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all font-bold rounded-lg p-4 cursor-pointer"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyPreviewCard;
