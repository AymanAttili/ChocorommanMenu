import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFlavour, changeAvailability, deleteFlavour, editFlavour } from "../../services/apiFlavours";

export function useDispatchflavours() {
    const queryClient = useQueryClient();
    const { mutateAsync: flavoursDispatch, isPending, isError, error } = useMutation({
        mutationFn: async ({ payload, action }) => {
            switch (action) {
                case 'add': return await addFlavour(payload);
                case 'edit': return await editFlavour(payload);
                case 'changeAvailability': return await changeAvailability(payload.id, payload.val)
                case 'delete': return await deleteFlavour(payload.id);
                // case 'search': return await searchFlavours(); 
                default: throw new Error('Unknown action')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
        }
    });

    return { flavoursDispatch, isLoading: isPending, isError, error };
}
