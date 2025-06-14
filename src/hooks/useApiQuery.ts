import { useQuery } from "@tanstack/react-query";
import client from "../api/client";

export const useApiQuery = <T, P extends object = object> (queryKey: string, params?: P) => {
  return useQuery<T>({
    retry: 1,
    queryKey: params ? [queryKey, Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")] : [queryKey],
    queryFn: async () => {
      const response = await client.get(queryKey, { params });
      return response.data;
    },
  });
};