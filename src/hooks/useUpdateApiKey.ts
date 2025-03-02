import { ActionsApi } from '@/lib/actionsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdateApiKey = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-api-key'],
		mutationFn: ActionsApi.updateApiKey,
		onSuccess: data => {
			queryClient.invalidateQueries({
				queryKey: ['api-key'],
			});
			toast.success(data.message);
		},
		onError: error => {
			toast.error(error.message);
		},
	});

	return {
		mutate,
		isPending,
	};
};
