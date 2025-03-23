import { Loader2 } from 'lucide-react';

export const Loader = () => {
	return (
		<div className='flex flex-col gap-2 items-center justify-center h-full'>
			<Loader2 size='50' className='text-slate-900 animate-spin' />
			<p className='text-xl font-bold text-center text-slate-900 animate-pulse'>
				Cargando...
			</p>
		</div>
	);
};
