import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItem, deleteItem, editItem } from "../../services/apiItems";

export function useDispatchItems() {
    const queryClient = useQueryClient();
    const { mutateAsync: itemsDispatch, isPending, isError, error } = useMutation({
        mutationFn: async ({ payload, action }) => {
            switch (action) {
                case 'add': return await addItem(payload);
                case 'edit': return await editItem(payload);
                case 'delete': return await deleteItem(payload.id);
                // case 'search': return await searchFlavours(); 
                default: throw new Error('Unknown action')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] });
        }
    });

    return { itemsDispatch, isLoading: isPending, isError, error };
}
