'use client';
import FeaturedArticles from '@/components/blogpage/FeaturedArticles';
import RecentBlogs from '@/components/blogpage/RecentBlogs';
import { Skeleton } from '@/components/ui/skeleton';
import { useBlogDetails } from '@/lib/queries';
import { Calendar03Icon, Folder02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { format } from 'date-fns';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

const BlogPageClient = () => {
    const params = useParams();
    const slug = params.slug as string;
    const {data: blog, isLoading, isError} = useBlogDetails(slug);
    console.log(blog?.content)
  return (
    <div className='relative w-full py-14 overflow-hidden'>

        {isLoading && (
            <div className="w-full">
              <div className="w-full flex items-center justify-center">
                <Skeleton className='w-lg rounded-sm h-4' />
              </div>
              <div className="w-full flex items-center justify-center mt-5">
                <Skeleton className='w-4xl rounded-sm h-8' />
              </div>
              <div className="w-full flex items-center justify-center mt-2">
                <Skeleton className='w-4xl rounded-sm h-8' />
              </div>
              <div className="w-full flex items-center justify-center mt-10">
                <Skeleton className='w-full aspect-video rounded-sm' />
              </div>
              <div className="w-full flex items-center justify-center mt-10">
                <div className="w-full max-w-4xl flex items-cenetr justify-center flex-col gap-3">
                    <Skeleton className='w-full rounded-sm h-4' />
                    <Skeleton className='w-full rounded-sm h-4' />
                    <Skeleton className='w-full rounded-sm h-4' />
                    <Skeleton className='w-[80%] rounded-sm h-6' />
                    <Skeleton className='w-[70%] rounded-sm h-6' />
                    <Skeleton className='w-[60%] rounded-sm h-6' />
                </div>
              </div>
            </div>
        )}
        {isError && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">Failed to load article. Please try again later.</p>
          </div>
        )}
        {blog && (
            <div className="w-full">
                <div className="w-full flex items-center justify-center gap-10 py-2 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <HugeiconsIcon icon={Calendar03Icon} className="size-4 text-muted-foreground" />
                        <span className="text-xs font-medium">{format(new Date(blog.created_at), 'MMMM d, yyyy • h:mm a')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <HugeiconsIcon icon={Folder02Icon} className="size-4 text-muted-foreground" />
                        <span className="text-xs font-medium">Real Estate</span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <h1 className='text-3xl lg:text-[48px] font-medium font-lato text-center text-secondary my-5 max-w-4xl'>{blog.title}</h1>
                </div>
                <div className='w-full relative aspect-video overflow-hidden rounded-[10px] bg-gray-100'>
                    <Image
                        src={blog.cover_image || "/property-placeholder.png"}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="w-full flex items-center justify-center mt-14">
                    <div className="w-full bg-white p-4 prose prose-lg max-w-4xl

                        prose-h1:font-lato
                        prose-h1:text-2xl
                        prose-h1:lg:text-3xl
                        prose-h1:text-secondary

                        prose-h2:font-lato
                        prose-h2:text-xl
                        prose-h2:lg:text-2xl
                        prose-h2:text-secondary

                        prose-p:text-muted-foreground
                        prose-p:leading-8

                        prose-li:text-muted-foreground
                        prose-li:leading-8

                        prose-strong:text-secondary

                        prose-a:text-primary

                        prose-hr:border-border

                        prose-img:rounded-xl
                        "
                     dangerouslySetInnerHTML={{ __html: blog.content }}

                    />
                </div>
                <h1 className='text-3xl lg:text-[48px] font-semibold font-lato text-secondary text-center mt-20'>Featured <span className='text-primary'>Articles</span></h1>
                <FeaturedArticles />
            </div>
        )}
    </div>
  )
}

export default BlogPageClient