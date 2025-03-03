'use client';

import { usePathname } from 'next/navigation';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const breadcrumbMap: Record<string, string> = {
	'/dashboard': 'Dashboard',
	'/dashboard/audio': 'Audio a Texto',
	'/dashboard/transcriptions': 'Transcripciones',
	'/dashboard/settings': 'Configuración',
};

export const AppBreadcrumb = () => {
	const pathname = usePathname();
	// Dividir el path en partes
	const paths = pathname.split('/').filter(Boolean);
	const currentPath = `/${paths.slice(0, 2).join('/')}`;
	const currentLabel =
		breadcrumbMap[currentPath] || 'Página Desconocida';

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className='hidden md:block'>
					<BreadcrumbLink href='/dashboard'>Inicio</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className='hidden md:block' />
				<BreadcrumbItem>
					<BreadcrumbPage>{currentLabel}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
