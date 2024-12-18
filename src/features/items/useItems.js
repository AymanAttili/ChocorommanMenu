import { useQuery } from "@tanstack/react-query";
import { getItemsByCategory } from "../../services/apiItems";

export function useItems(categoryId) {
    const { isFetching, data: items, error, isError } = useQuery({
        queryKey: ["items", categoryId],
        queryFn: async () => {
            return await getItemsByCategory(categoryId)
        },

        throwOnError: true
    });

    return { isLoading: isFetching, items, error, isError };
}