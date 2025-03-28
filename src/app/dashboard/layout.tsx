import { Separator } from '@/components/ui/separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/shared/AppSidebar';
import { AppBreadcrumb } from '@/components/shared/AppBreadcrumb';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
					<SidebarTrigger className='-ml-1' />
					<Separator orientation='vertical' className='mr-2 h-4' />
					<AppBreadcrumb />
				</header>
				<main className='flex flex-1 flex-col gap-4 p-4 bg-amber-100'>
					{children}
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
