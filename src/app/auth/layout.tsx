'use client';

import { useAuthListener, useUser } from '@/hooks';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useAuthListener();

	const { data: user, isLoading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (user) {
			router.replace('/dashboard/audio');
		}
	}, [user, router]);

	if (isLoading)
		return (
			<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
				<Loader2 className='size-15 animate-spin text-slate-500' />
			</div>
		);

	if (user) return null;

	return (
		<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
			<main className='w-full max-w-sm'>{children}</main>
		</div>
	);
}
