import { getUser } from '@/lib/authSupabase';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: getUser,
		refetchOnWindowFocus: false,
	});

	return {
		data,
		isLoading,
	};
};
