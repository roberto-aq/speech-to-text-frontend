import { ActionsApi } from '@/lib/actionsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadAudio = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['upload-audio'],
		mutationFn: ActionsApi.uploadAudioAndTranscribe,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['transcriptions'],
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
