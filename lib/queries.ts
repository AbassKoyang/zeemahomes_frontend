import { useQuery } from "@tanstack/react-query";
import { fetchProperties, fetchRecentBlogPosts, fetchSearchFilters } from "./api";

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