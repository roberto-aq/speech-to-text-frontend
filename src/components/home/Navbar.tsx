import Link from 'next/link';
import { Button } from '../ui/button';

export const Navbar = () => {
	return (
		<header className='bg-black/50 text-white p-3 m-3 shadow rounded-lg backdrop-blur-md sm:m-5 sm:p-5 '>
			<div className='container mx-auto flex gap-3 px-2 justify-between items-center sm:px-5 sm:gap-0 '>
				{/* Logo o nombre de la marca */}
				<Link href='/' className='text-xl sm:text-2xl font-bold'>
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
					<div className=''>
						<Button
							variant='default'
							size='default'
							className='cursor-pointer '
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
