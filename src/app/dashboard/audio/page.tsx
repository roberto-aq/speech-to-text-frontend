'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUploadAudio } from '@/hooks';
import { Loader2, UploadCloud } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function DashboardAudioPage() {
	const [file, setFile] = useState<File | null>(null);
	const { mutate, isPending } = useUploadAudio();

	const handleFileChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleUpload = () => {
		if (!file) {
			toast.error('Selecciona un archivo de audio', {
				duration: 2000,
			});
			return;
		}

		mutate(file, {
			onSuccess: () => {
				toast.success(
					'Archivo de audio subido y transcrito correctamente',
					{
						duration: 2000,
					}
				);
				setFile(null);
			},
			onError: () => {
				toast.error('Error al subir el archivo de audio', {
					duration: 2000,
				});
			},
		});
	};

	return (
		<div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg'>
			<h1 className='text-2xl font-bold text-center mb-4'>
				🎙️ Subir Audio para Transcripción
			</h1>

			{/* Input para seleccionar el archivo */}
			<div className='flex flex-col items-center'>
				<Input
					type='file'
					accept='audio/*'
					onChange={handleFileChange}
					className='mb-4'
				/>
				{file && <p className='text-sm text-gray-600'>{file.name}</p>}
			</div>

			{/* Botón de subida */}
			<Button
				onClick={handleUpload}
				disabled={isPending || !file}
				className='w-full mt-4 flex items-center justify-center'
			>
				{isPending ? (
					<>
						<Loader2 className='h-5 w-5 animate-spin mr-2' />{' '}
						Subiendo...
					</>
				) : (
					<>
						<UploadCloud className='h-5 w-5 mr-2' /> Subir Audio
					</>
				)}
			</Button>
		</div>
	);
}
