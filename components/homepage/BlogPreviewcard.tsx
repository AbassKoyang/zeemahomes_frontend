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
import { BlogPost } from "@/lib/types";
import { format } from 'date-fns'


interface BlogPreviewcardProps {
  blog: BlogPost;
}

const BlogPreviewcard = ({ blog }: BlogPreviewcardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };


  return (
    <div className="group bg-white rounded-[16px] overflow-hidden border border-[#E5EBEE] hover:shadow-sm transition-all duration-300 flex flex-col h-full p-3 font-lato">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
        <Image
          src={blog.cover_image || "/property-placeholder.png"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col flex-1 gap-4 my-2">
        <div>
          <h3 className="text-lg font-semibold text-secondary line-clamp-1 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
        </div>

        {/* Specs */}
        <div className="w-full flex items-center justify-between py-4 border-y border-gray-50 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={BedDoubleIcon} className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium">{format(new Date(blog.created_at), 'MMMM d, yyyy • h:mm a')}</span>
          </div>
          <div className="w-px h-4 bg-[#E0E0E0]"></div>
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={LandPlotIcon} className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium">Real Estate</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-[#E0E0E0]">
          <p className="text-xs font-medium text-muted-foreground">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewcard;
