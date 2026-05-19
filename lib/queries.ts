import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchAllBlogPosts, fetchBlogDetails, fetchProperties, fetchPropertyDetails, fetchRecentBlogPosts, fetchSearchFilters, searchProperties } from "./api";
import { BlogPost, Property } from "./types";

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

export const useSearchProperties = (params: Record<string, any>) =>
  useInfiniteQuery({
    queryKey: ["properties", params],

    queryFn: ({ pageParam = 1 }) =>
      searchProperties(params, pageParam),

    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const url = new URL(String(lastPage.next));

      return Number(url.searchParams.get("page"));
    },

    initialPageParam: 1,
});

export const useFetchAllBlogPosts = () =>
  useInfiniteQuery({
    queryKey: ["allBlogPosts"],
    queryFn: ({ pageParam = 1 }) => fetchAllBlogPosts(pageParam),

    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const url = new URL(String(lastPage.next));

      return Number(url.searchParams.get("page"));
    },

    initialPageParam: 1,
  });


export const usePropertyDetails = (slug: string) => {
  return useQuery<Property>({
    queryKey: ["propertyDetails", slug],
    queryFn: () => fetchPropertyDetails(slug),
    enabled: !!slug,
  });
};

export const useBlogDetails = (slug: string) => {
  return useQuery<BlogPost>({
    queryKey: ["blogDetails", slug],
    queryFn: () => fetchBlogDetails(slug),
    enabled: !!slug,
  });
};