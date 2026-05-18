import AllBlogs from '@/components/blogpage/AllBlogs'
import RecentBlogs from '@/components/blogpage/RecentBlogs'
import Properties from '@/components/listingspage/Properties'
import SearchBar from '@/components/listingspage/SearchBar'
import React from 'react'

const Blogpage = () => {
  return (
    <section className='relative w-full py-14 overflow-hidden bg-transparent'>
        <h1 className='text-3xl lg:text-[48px] font-semibold font-lato text-center text-secondary mb-5'>Our <span className='text-primary'>Blog</span></h1>
        <RecentBlogs />
         <h1 className='text-3xl lg:text-[48px] font-semibold font-lato text-secondary mt-20'>More <span className='text-primary'>Articles</span></h1>
         <AllBlogs />
    </section>

  )
}

export default Blogpage