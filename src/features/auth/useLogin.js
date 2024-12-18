import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fakeLogin } from "../../services/apiLogin";

export function useLogin() {
    const queryClient = useQueryClient();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ userName, password }) => fakeLogin(userName, password),
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data);
        }
    });

    return { login, isLoading: isPending };
}
