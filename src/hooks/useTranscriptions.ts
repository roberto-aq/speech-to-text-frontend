import { ActionsApi } from '@/lib/actionsApi';
import { useQuery } from '@tanstack/react-query';

export const useTranscriptions = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['transcriptions'],
		queryFn: ActionsApi.getTranscriptions,
	});

	return {
		data,
		isLoading,
	};
};
