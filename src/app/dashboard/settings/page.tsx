'use client';

import { useEffect, useState } from 'react';
import { Check, Edit } from 'lucide-react';
import { useApiKey, useUpdateApiKey } from '@/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
	const [editing, setEditing] = useState(false);
	const [newApiKey, setNewApiKey] = useState('');

	const { data: apiKey, isLoading } = useApiKey();

	const { mutate, isPending: isUpdating } = useUpdateApiKey();

	useEffect(() => {
		if (apiKey) {
			console.log(apiKey)
			setNewApiKey(apiKey);
		}
	}, [apiKey]);

	const handleSave = () => {
		if (!newApiKey) return;

		mutate(newApiKey);
		setEditing(false);
	};

	return (
		<div className=' p-6'>
			<h1 className='text-2xl font-bold text-center mb-4'>
				⚙️ Configuración
			</h1>

			{/* Input de API Key */}
			<div className='relative flex items-center'>
				<Input
					type='text'
					value={newApiKey}
					onChange={e => setNewApiKey(e.target.value)}
					disabled={!editing || isLoading}
					className='p-4 pr-12 bg-white'
				/>
				{/* Botón de Editar */}
				<Button
					variant='ghost'
					className='absolute right-2 top-1/2 transform -translate-y-1/2'
					onClick={() => setEditing(true)}
				>
					<Edit className='h-5 w-5 text-gray-500 hover:text-blue-500 transition-all duration-200' />
				</Button>
			</div>

			{/* Botón de Guardar (Solo se muestra cuando se edita) */}
			{editing && (
				<Button
					onClick={handleSave}
					disabled={isUpdating}
					className='mt-4 w-full flex items-center justify-center'
				>
					{isUpdating ? (
						<>
							<Check className='h-5 w-5 animate-spin mr-2' />{' '}
							Guardando...
						</>
					) : (
						<>
							<Check className='h-5 w-5 mr-2' /> Guardar Cambios
						</>
					)}
				</Button>
			)}
		</div>
	);
}
