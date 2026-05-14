import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchProperties, fetchRecentBlogPosts, fetchSearchFilters, searchProperties } from "./api";

// Fetch filter options to populate dropdowns
  export const useFetchFilters = () => useQuery({
    queryKey: ["searchFilters"],
    queryFn: fetchSearchFilters,
  })
  
  export const useFetchFeaturedProperties = () => useQuery({
    queryKey: ["featuredProperties"],
    queryFn: fetchProperties,
  });

  export const useFetchRecentBlogPosts = () => useQuery({
    queryKey: ["recentBlogPosts"],
    queryFn: fetchRecentBlogPosts,
  });

  export const useSearchProperties = (params: Record<string, any>) => useInfiniteQuery({
    queryKey: ["properties"],
    queryFn: ({pageParam = 1}) => searchProperties(params, pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined

      const url = new URL(String(lastPage.next))
      return Number(url.searchParams.get('page'))
    },    
    initialPageParam: 1,
  })