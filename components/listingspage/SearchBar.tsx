'use client';
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from '@tanstack/react-query';
import { searchProperties } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useFetchFilters } from '@/lib/queries';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { HelpCircleIcon, Search01Icon } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';

const SearchBar = () => {    
const { data, isLoading, isError } = useFetchFilters();
const router = useRouter()
const [filters, setFilters] = useState<{
    cities: string[];
    property_types: string[];
    } | null>(null);

const [searchParams, setSearchParams] = useState({
query: '',
location: "",
min_price: "",
max_price: "",
property_type: "",
status: "",
beds: ''
});


useEffect(() => {
if (data) {
    setFilters(data);
}
}, [data]);

     // Search mutation
  const searchMutation = useMutation({
    mutationFn: (params: typeof searchParams) => searchProperties(params, 1),
    onSuccess: (data) => {
      console.log("Search results:", data);
      const query = new URLSearchParams();
      if (searchParams.query) query.append("q", searchParams.query);
      if (searchParams.location) query.append("location", searchParams.location);
      if (searchParams.min_price) query.append("min_price", searchParams.min_price);
      if (searchParams.max_price) query.append("max_price", searchParams.max_price);
      if (searchParams.property_type) query.append("property_type", searchParams.property_type);
      if (searchParams.status) query.append("status", searchParams.status);
      if (searchParams.beds) query.append("beds", searchParams.beds);
      
      router.push(`/listings?${query.toString()}`);
    },
  });

  const handleSearch = () => {
    searchMutation.mutate(searchParams);
  };

  return (
    <div className="w-full">
        <div className="w-full lg:flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                Property <span className="text-primary">Listings</span>
            </h1>
            <div className="mt-4 lg:mt-0">
                <Select
                value={searchParams.status}
                onValueChange={(value) => setSearchParams({ ...searchParams, status: value })}
              >
                <SelectTrigger className="text-base border-none bg-transparent p-0 h-auto focus-visible:ring-0 capitalize w-full justify-start">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="z-1000">
                  {isLoading && <SelectItem value="loading">Loading...</SelectItem>}
                  {isError && <SelectItem value="error">Error loading property types</SelectItem>}
                <SelectItem  value='for_sale' className="capitalize">
                    For Sale
                </SelectItem>
                <SelectItem  value='for_sale' className="capitalize">
                    For Rent
                </SelectItem>
                </SelectContent>
              </Select>
            </div>
        </div>

        <div className="w-full flex items-center justify-between flex-wrap mt-8 gap-5 py-[40px] px-4.5 border-border border-2 lg:p-0 lg:border-none rounded-[12px] lg:rounded-none">
            <Input placeholder='What property are you looking for?' onChange={(e) => setSearchParams({ ...searchParams, query: e.target.value })} className='h-[50px] w-full max-w-lg' />

            <div className="flex items-center flex-wrap gap-5">
                <Input
                    type="number"
                    placeholder="Min"
                    className="w-[100px] border-border bg-transparent px-3 h-[50px] focus-visible:ring-0"
                    value={searchParams.min_price}
                    onChange={(e) => setSearchParams({ ...searchParams, min_price: e.target.value })}
                />

                <Input
                    type="number"
                    placeholder="Max"
                    className="w-[100px] border-border bg-transparent px-3 h-[50px] focus-visible:ring-0"
                    value={searchParams.max_price}
                    onChange={(e) => setSearchParams({ ...searchParams, max_price: e.target.value })}
                />

                <Select
                    value={searchParams.property_type}
                    onValueChange={(value) => setSearchParams({ ...searchParams, property_type: value })}
                >
                    <SelectTrigger className="border-border rounded-[10px] bg-transparent px-3 h-[50px]! focus-visible:ring-0 capitalize justify-start">
                    <SelectValue placeholder="Building Type" />
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

                <Select
                value={searchParams.location}
                onValueChange={(value) => setSearchParams({ ...searchParams, location: value })}
                >
                <SelectTrigger className="border-border bg-transparent px-3 h-[50px]! focus-visible:ring-0 justify-start">
                    <SelectValue placeholder="Location" />
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


                <Select
                value={searchParams.location}
                onValueChange={(value) => setSearchParams({ ...searchParams, location: value })}
                >
                <SelectTrigger className="border-border bg-transparent px-3 h-[50px]! focus-visible:ring-0 justify-start">
                    <SelectValue placeholder="Beds" />
                </SelectTrigger>
                <SelectContent className="z-1000!">
                    <SelectItem value='1'>
                        1
                    </SelectItem>
                    <SelectItem value='2'>
                        2
                    </SelectItem>
                    <SelectItem value='3'>
                        3
                    </SelectItem>
                    <SelectItem value='4'>
                        4
                    </SelectItem>
                    <SelectItem value='5'>
                        5
                    </SelectItem>
                    <SelectItem value='6'>
                        6
                    </SelectItem>
                    <SelectItem value='7'>
                        7
                    </SelectItem>
                </SelectContent>
                </Select>

                <Button
                onClick={handleSearch}
                disabled={searchMutation.isPending}
                className="w-full lg:w-auto min-w-[140px] bg-primary hover:bg-primary/90 text-white h-[50px] rounded-[6px] gap-2 text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-70"
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
  )
}

export default SearchBar
