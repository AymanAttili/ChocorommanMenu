import { useMutation } from "@tanstack/react-query";
import { changeAvailability } from "../../services/apiFlavours";

export function useDispatchflavours() {
    const { mutateAsync: flavoursDispatch, isPending, isError, error } = useMutation({
        mutationFn: async ({ payload, action }) => {
            switch (action) {
                // case 'add': return await addFlavour(;
                // case 'edit': return await editFlavour();
                case 'changeAvailability': return await changeAvailability(payload.id, payload.val)
                // case 'delete': return await deleteFlavour(); 
                // case 'search': return await searchFlavours(); 
                default: throw new Error('Unknown action')
            }
        }
    });

    return { flavoursDispatch, isLoading: isPending, isError, error };
}
