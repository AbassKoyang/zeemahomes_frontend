import Properties from '@/components/listingspage/Properties'
import SearchBar from '@/components/listingspage/SearchBar'
import React, { Suspense } from 'react'

const ListingsPage = () => {
  return (
    <section className='relative w-full py-14 overflow-hidden bg-transparent'>
        <SearchBar />
        <Suspense fallback={<div className='w-full mt-14' />}>
          <Properties />
        </Suspense>
    </section>

  )
}

export default ListingsPage
