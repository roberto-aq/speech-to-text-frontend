'use client';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from '@/components/ui/sidebar';
import { useLogout } from '@/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{
		title: 'Inicio rápido',
		url: '#',
		items: [
			{
				title: 'Audio a Texto',
				url: '/dashboard/audio',
				isActive: true,
			},

			{
				title: 'Transcripciones',
				url: '/dashboard/transcriptions',
			},
			{
				title: 'Configuración',
				url: '/dashboard/settings',
			},
		],
	},
];

export const AppSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	const pathName = usePathname();
	const { mutate: logout } = useLogout();

	const handleLogout = () => {
		logout();
	};

	return (
		<Sidebar {...props}>
			<SidebarHeader className='p-5'>
				<Link href={'/'} passHref>
					<span className='text-3xl font-bold'>TxtSpeechy</span>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				{links.map(item => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu className='space-y-1.5'>
								{item.items.map(item => {
									const isActive = pathName === item.url;

									return (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton
												asChild
												isActive={isActive}
												className='text-lg px-4 py-5'
											>
												<Link href={item.url}>{item.title}</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter className='pb-5'>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							onClick={handleLogout}
							className='cursor-pointer text-lg p-4 py-5'
						>
							Cerrar sesión
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
