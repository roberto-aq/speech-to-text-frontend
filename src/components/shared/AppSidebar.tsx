import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';

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
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<Link href={'/dashboard'} passHref>
					<span className='text-3xl font-bold'>Logo</span>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				{links.map(item => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map(item => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											isActive={item.isActive}
										>
											<Link href={item.url}>{item.title}</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
};
