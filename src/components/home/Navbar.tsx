import Link from 'next/link';
import { Button } from '../ui/button';

export const Navbar = () => {
	return (
		<header className='bg-black/50 text-white  shadow m-5 p-5 rounded-lg backdrop-blur-md'>
			<div className='container mx-auto flex justify-between items-center px-5'>
				{/* Logo o nombre de la marca */}
				<Link href='/' className='text-2xl font-bold'>
					TxtSpeechy
				</Link>

				<div className='flex items-center gap-4'>
					{/* Menú de navegación para pantallas grandes */}
					<nav className='hidden md:flex space-x-6'>
						<Link href='/' className='hover:text-neutral-300'>
							Inicio
						</Link>
					</nav>

					{/* Botón de acción (por ejemplo, Iniciar Sesión) para pantallas grandes */}
					<div className='hidden md:block'>
						<Button
							variant='default'
							size='default'
							className='cursor-pointer'
							asChild
						>
							<Link href='/auth/login'>Iniciar Sesión</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
