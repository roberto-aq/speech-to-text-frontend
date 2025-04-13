import { login } from '@/lib/authSupabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const { mutate, isPending } = useMutation({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [''],
			});
			router.replace('/dashboard/audio');
		},
	});

	return {
		mutate,
		isPending,
	};
};
