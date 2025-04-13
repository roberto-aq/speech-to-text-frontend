import { Loader2 } from 'lucide-react';

type Props = {
	fullScreen?: boolean;
};

export const Loader = ({ fullScreen = false }: Props) => {
	return (
		<div
			className={`flex flex-col items-center justify-center gap-2 ${
				fullScreen ? 'h-screen' : 'h-full'
			}`}
		>
			<Loader2 size='50' className='animate-spin' />
			<p className='text-xl font-bold text-center animate-pulse'>
				Cargando...
			</p>
		</div>
	);
};
