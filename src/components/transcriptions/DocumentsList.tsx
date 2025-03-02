'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Transcription } from '@/types/transcription';

interface Props {
	documents: Transcription[];
	onDownload: (filename: string) => void;
}

export default function DocumentList({
	documents,
	onDownload,
}: Props) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
			{documents.map(doc => (
				<Card
					key={doc.filename}
					className='flex flex-col items-center p-4 shadow-md'
				>
					{/* Imagen del Documento */}
					<Image
						src='/icon_doc.png'
						alt='Documento Word'
						width={80}
						height={80}
						className='mb-4'
						priority
					/>

					{/* Información del Documento */}
					<CardContent className='flex items-center'>
						<div className='flex flex-col'>
							<p className='text-lg font-semibold truncate w-40'>
								{doc.filename}
							</p>
							<p className='text-sm text-gray-500'>
								{format(
									new Date(doc.createdAt),
									'dd MMM yyyy, HH:mm',
									{
										locale: es,
									}
								)}
							</p>
						</div>
						{/* Botón de Descarga */}
						<Button
							variant='outline'
							onClick={() => onDownload(doc.filename)}
							className='cursor-pointer'
						>
							<Download className='h-6 w-6' />
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
