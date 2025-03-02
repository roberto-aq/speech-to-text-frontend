'use client';

import DocumentList from '@/components/transcriptions/DocumentsList';
import { useTranscriptions } from '@/hooks';
import { ActionsApi } from '@/lib/actionsApi';
import { toast } from 'sonner';

export default function TranscriptionsPage() {
	const { data: documents, isLoading } = useTranscriptions();

	if (isLoading) {
		return <div>Cargando...</div>;
	}

	const downloadTranscription = (filename: string) => {
		ActionsApi.downloadTranscription(filename);
		toast.success('Transcripción descargada correctamente', {
			duration: 2000,
		});
	};

	if (documents) {
		return (
			<div>
				<h1>Lista de Transcripciones</h1>

				{documents.length === 0 ? (
					<p className='text-center text-gray-500'>
						No hay transcripciones disponibles.
					</p>
				) : (
					<DocumentList
						documents={documents}
						onDownload={downloadTranscription}
					/>
				)}
			</div>
		);
	}
}
