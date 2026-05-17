'use client';
import { useFetchRecentBlogPosts, useSearchProperties } from '@/lib/queries'
import { BlogPost, Property } from '@/lib/types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PropertyPreviewCard from '../homepage/PropertyPreviewCard'
import { Skeleton } from '../ui/skeleton'
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar03Icon, Folder02Icon, Loading } from '@hugeicons/core-free-icons';
import BlogPreviewcard from '../homepage/BlogPreviewcard';
import Image from 'next/image';
import { format } from 'date-fns';


const RecentBlogs = () => {

    const {data: blogposts, 
        isLoading, 
        isError,
    } = useFetchRecentBlogPosts();

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
            <p className="text-muted-foreground font-medium">Failed to load blogs. Please try again later.</p>
          </div>
        )}

        {blogposts && blogposts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 h-[470px] relative rounded-[10px] overflow-hidden">
                <div className="size-full absolute inset-0 z-10">
                  <div className="size-full relative">
                    <Image src={blogposts[0].cover_image as string} fill alt={blogposts[0].title} className='object-cover' />
                  </div>
                </div>
                <div className="size-full absolute flex flex-col justify-end inset-0 z-30 bg-linear-to-b from-transparent via-black/20 to-black/40 p-[30px]">
                <div>
                   <div>
                    <h3 className="text-lg font-semibold text-white line-clamp-1 group-hover:text-primary transition-colors">
                      {blogposts[0].title}
                    </h3>
                  </div>

                  {/* Specs */}
                  <div className="w-full flex items-center gap-10 py-2 text-white">
                    <div className="flex items-center gap-1.5">
                      <HugeiconsIcon icon={Calendar03Icon} className="size-4 text-white" />
                      <span className="text-xs font-medium">{format(new Date(blogposts[0].created_at), 'MMMM d, yyyy • h:mm a')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HugeiconsIcon icon={Folder02Icon} className="size-4 text-white" />
                      <span className="text-xs font-medium">Real Estate</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                    <p className="text-xs font-medium text-white">
                      {blogposts[0].excerpt}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex gap-8 flex-col bg-white">
                {blogposts.map((blog)=> (
                  <div className="w-full flex items-center justify-between rounded-[10px] overflow-hidden border border-border">
                    <div className="w-[180px] h-full min-h-[150px] relative bg-pink-300">
                          <Image src={blog.cover_image as string} fill alt={blog.title}  />
                    </div>
                    <div className="w-[70%] p-[20px]">
                      <div>
                        <h3 className="text-lg font-semibold text-secondary line-clamp-1 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>
                      </div>
                      
                              {/* Specs */}
                              <div className="w-full flex items-center gap-10 py-2 border-y border-gray-50 text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                  <HugeiconsIcon icon={Calendar03Icon} className="size-4 text-muted-foreground" />
                                  <span className="text-xs font-medium">{format(new Date(blog.created_at), 'MMMM d, yyyy • h:mm a')}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <HugeiconsIcon icon={Folder02Icon} className="size-4 text-muted-foreground" />
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
                ))}
              </div>
            </div>
        )}
        {blogposts && blogposts.length < 1 && (
             <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">No blogs found at the moment.</p>
          </div>
        )}
    </div>
  )
}

export default RecentBlogs