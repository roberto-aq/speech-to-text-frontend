import { login } from '@/lib/authSupabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [''],
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
