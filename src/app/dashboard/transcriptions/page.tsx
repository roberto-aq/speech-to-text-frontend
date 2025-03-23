'use client';

import { Loader } from '@/components/shared/Loader';
import DocumentList from '@/components/transcriptions/DocumentsList';
import { useDeleteTranscription, useTranscriptions } from '@/hooks';
import { ActionsApi } from '@/lib/actionsApi';
import { toast } from 'sonner';

export default function TranscriptionsPage() {
	const { data: documents, isLoading } = useTranscriptions();
	const { isPending, mutate } = useDeleteTranscription();

	if (isLoading || isPending) {
		return <Loader />;
	}

	const downloadTranscription = (filename: string) => {
		ActionsApi.downloadTranscription(filename);
		toast.success('Transcripción descargada correctamente', {
			duration: 2000,
		});
	};

	const deleteTranscription = (filename: string) => {
		mutate(filename);
		toast.success('Transcripción eliminada correctamente', {
			duration: 2000,
		});
	};

	if (documents) {
		return (
			<div className='p-4 space-y-6'>
				<h1 className='text-2xl font-bold'>
					Lista de Transcripciones
				</h1>

				{documents.length === 0 ? (
					<div className='flex h-full justify-center mt-20'>
						<p className='text-center text-xl font-semibold text-slate-900'>
							No hay transcripciones disponibles.
						</p>
					</div>
				) : (
					<DocumentList
						documents={documents}
						onDownload={downloadTranscription}
						onDelete={deleteTranscription}
					/>
				)}
			</div>
		);
	}
}
