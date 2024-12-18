import { useQuery } from "@tanstack/react-query";

export function useUser() {
    const { isFetching, data: user, error, isError } = useQuery({
        queryKey: ["user"],
        queryFn: () => {
            return null;
        },

        throwOnError: true
    });

    return { isLoading: isFetching, user, error, isError, isAuth: user && true };
}