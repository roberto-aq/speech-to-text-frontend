'use client';

import { Separator } from '@/components/ui/separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/shared/AppSidebar';
import { AppBreadcrumb } from '@/components/shared/AppBreadcrumb';
import { useAuthListener, useUser } from '@/hooks';
import { Loader } from '@/components';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useAuthListener();

	const { data: user, isLoading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/auth/login');
		}
	}, [user, router]);

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
					<SidebarTrigger className='-ml-1' />
					<Separator orientation='vertical' className='mr-2 h-4' />
					<AppBreadcrumb />
				</header>
				{isLoading ? (
					<Loader />
				) : (
					<main className='flex h-full flex-col overflow-hidden p-5'>
						<div className='flex-1 overflow-auto'>{children}</div>
					</main>
				)}
			</SidebarInset>
		</SidebarProvider>
	);
}
