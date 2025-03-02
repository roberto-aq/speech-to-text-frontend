import { ActionsApi } from '@/lib/actionsApi';
import { useQuery } from '@tanstack/react-query';

export const useApiKey = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['api-key'],
		queryFn: ActionsApi.getApiKey,
	});

	return {
		data: data?.apiKey || '',
		isLoading,
	};
};
