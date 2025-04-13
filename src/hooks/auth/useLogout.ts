import { logout } from '@/lib/authSupabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useLogout = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: ['user'],
			});
		},
		onError: error => {
			toast.error(
				typeof error === 'string' ? error : 'Error al cerrar sesión',
				{
					duration: 3000,
				}
			);
		},
	});

	return {
		mutate,
		isPending,
	};
};
