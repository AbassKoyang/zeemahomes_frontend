import Properties from '@/components/listingspage/Properties'
import SearchBar from '@/components/listingspage/SearchBar'
import React from 'react'

const ListingsPage = () => {
  return (
    <section className='relative w-full py-14 overflow-hidden bg-transparent'>
        <SearchBar />
        <Properties />
    </section>

  )
}

export default ListingsPage