'use client';
import { useFetchAllBlogPosts, useSearchProperties } from '@/lib/queries'
import { BlogPost, Property } from '@/lib/types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PropertyPreviewCard from '../homepage/PropertyPreviewCard'
import { Skeleton } from '../ui/skeleton'
import { HugeiconsIcon } from '@hugeicons/react';
import { Loading } from '@hugeicons/core-free-icons';
import BlogPreviewcard from '../homepage/BlogPreviewcard';


const AllBlogs = () => {
    const { ref, inView } = useInView();

    const {data: blogposts, 
        isLoading, 
        isError,
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage
    } = useFetchAllBlogPosts();

    console.log(blogposts)

    useEffect(() => {
        if (inView && hasNextPage) {
          fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    const allblogposts = useMemo(() => {
        return blogposts?.pages?.flatMap(page => page.results) ;
    }, [blogposts]);

    console.log(allblogposts)

  return (
    <div className=" w-full mt-[30px]">
        {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="aspect-4/5 rounded-2xl" />
            ))}
          </div>
        )}

        {isError && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">Failed to load blog posts. Please try again later.</p>
          </div>
        )}

        {allblogposts && allblogposts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allblogposts.map((blog: BlogPost) => (
                <BlogPreviewcard key={blog.id} blog={blog} />
            ))}
            </div>
        )}
        {!isLoading && allblogposts && allblogposts.length < 1 && (
             <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">No blog posts found at the moment.</p>
          </div>
        )}
        <div ref={ref} className="w-full flex items-center justify-center mt-6">
            {isFetchingNextPage && <HugeiconsIcon icon={Loading} className="size-5 animate-spin text-primary" />}
        </div>
    </div>
  )
}

export default AllBlogs