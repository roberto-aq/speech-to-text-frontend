import { ActionsApi } from '@/lib/actionsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteTranscription = () => {

    const queryClient = useQueryClient();

    const {
        mutate,
        isPending,
    } = useMutation({
        mutationFn: ActionsApi.deleteTranscription,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['transcriptions']
            })
        }
    })

    return {
        mutate,
        isPending,
    };
}