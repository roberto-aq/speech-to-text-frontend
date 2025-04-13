import { login } from '@/lib/authSupabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useLogin = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [''],
			});
		},
		onError: error => {
			toast.error(error.message || 'Error al iniciar sesión', {
				duration: 3000,
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
