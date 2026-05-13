"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchSearchFilters, searchProperties } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Location01Icon,
  Wallet01Icon,
  Home01Icon,
  Search01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useFetchFilters } from "@/lib/queries";

const SearchBar = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<{
    cities: string[];
    property_types: string[];
  } | null>(null);
  
  const [searchParams, setSearchParams] = useState({
    location: "",
    min_price: "",
    max_price: "",
    property_type: "",
  });
  const { data, isLoading, isError } = useFetchFilters();


  useEffect(() => {
    if (data) {
      setFilters(data);
    }
  }, [data]);

  // Search mutation
  const searchMutation = useMutation({
    mutationFn: (params: typeof searchParams) => searchProperties(params),
    onSuccess: (data) => {
      console.log("Search results:", data);
      const query = new URLSearchParams();
      if (searchParams.location) query.append("location", searchParams.location);
      if (searchParams.min_price) query.append("min_price", searchParams.min_price);
      if (searchParams.max_price) query.append("max_price", searchParams.max_price);
      if (searchParams.property_type) query.append("property_type", searchParams.property_type);
      
      router.push(`/listings?${query.toString()}`);
    },
  });

  const handleSearch = () => {
    searchMutation.mutate(searchParams);
  };

  return (
    <div className="relative z-20 mt-10">
      <div className="bg-white rounded-[10px] lg:rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-3 lg:p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-center">
          {/* Where */}
          <div className="flex items-center gap-4 px-6 py-4 border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-xl group relative">
            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
              <HugeiconsIcon icon={Location01Icon} className="size-6" />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <h5 className="text-sm font-bold text-secondary">Where?</h5>
              <Select
                value={searchParams.location}
                onValueChange={(value) => setSearchParams({ ...searchParams, location: value })}
              >
                <SelectTrigger className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 w-full justify-start">
                  <SelectValue placeholder="Choose Location" />
                </SelectTrigger>
                <SelectContent className="z-1000!">
                  {isLoading && <SelectItem value="loading">Loading...</SelectItem>}
                  {isError && <SelectItem value="error">Error loading locations</SelectItem>}
                  {!isLoading && !isError && filters?.cities?.map((city: string) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Budget */}
          <div className="flex items-center gap-4 px-6 py-4 border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-xl group">
            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
              <HugeiconsIcon icon={Wallet01Icon} className="size-6" />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <h5 className="text-sm font-bold text-secondary">Budget</h5>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  placeholder="Min"
                  className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 w-16"
                  value={searchParams.min_price}
                  onChange={(e) => setSearchParams({ ...searchParams, min_price: e.target.value })}
                />
                <span className="text-xs text-gray-400">-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 w-16"
                  value={searchParams.max_price}
                  onChange={(e) => setSearchParams({ ...searchParams, max_price: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-4 px-6 py-4 border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-xl group">
            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
              <HugeiconsIcon icon={Home01Icon} className="size-6" />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <h5 className="text-sm font-bold text-secondary">Property Type</h5>
              <Select
                value={searchParams.property_type}
                onValueChange={(value) => setSearchParams({ ...searchParams, property_type: value })}
              >
                <SelectTrigger className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 capitalize w-full justify-start">
                  <SelectValue placeholder="Choose Building Type" />
                </SelectTrigger>
                <SelectContent className="z-1000">
                  {isLoading && <SelectItem value="loading">Loading...</SelectItem>}
                  {isError && <SelectItem value="error">Error loading property types</SelectItem>}
                  {!isLoading && !isError && filters?.property_types?.map((type: string) => (
                    <SelectItem key={type} value={type} className="capitalize">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <div className="p-2">
            <Button
              onClick={handleSearch}
              disabled={searchMutation.isPending}
              className="w-full lg:w-auto min-w-[160px] bg-primary hover:bg-primary/90 text-white h-14 rounded-[6px] gap-2 text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-70"
            >
              <HugeiconsIcon
                icon={searchMutation.isPending ? HelpCircleIcon : Search01Icon}
                className={cn("size-5", searchMutation.isPending && "animate-spin")}
              />
              {searchMutation.isPending ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
