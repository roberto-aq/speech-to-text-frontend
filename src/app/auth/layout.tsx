export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
			<main className='w-full max-w-sm'>{children}</main>
		</div>
	);
}
