"use client";

import Link from "next/link";
import {useFetchRecentBlogPosts} from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BlogPost, Property } from "@/lib/types";
import BlogPreviewcard from "./BlogPreviewcard";

const Blog = () => {
  const { data: blogs, isLoading, isError } = useFetchRecentBlogPosts();

  return (
    <section className="py-20 bg-transparent font-lato">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
            Our Latest <span className="text-primary">Blog</span>
          </h2>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Discover our stories</p>
        </div>

        {/* Blogs Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">Failed to load blogs. Please try again later.</p>
          </div>
        ) : blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: BlogPost) => (
              <BlogPreviewcard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <p className="text-muted-foreground font-medium">No blogs found at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href="/blogs" passHref>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white h-12 lg:h-16 px-5 lg:px-10 rounded-[6px] text-sm lg:text-lg font-semibold group transition-all shadow-lg shadow-primary/20 font-lato"
            >
              View All Posts
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4 lg:size-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
