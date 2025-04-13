'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginFormValues, loginSchema } from '@/schemas/loginSchema';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useLogin } from '@/hooks';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: 'andrea@gmail.com',
			password: 'abc1233',
		},
	});

	const { mutate: login, isPending } = useLogin();

	function onSubmit(values: LoginFormValues) {
		login(values, {
			onError: error => {
				toast.error(
					typeof error === 'string'
						? error
						: 'Error al iniciar sesión',
					{
						duration: 3000,
					}
				);
			},
		});
	}

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				{isPending ? (
					<div className='h-60 flex items-center justify-center'>
						<Loader2 className='animate-spin size-12 text-center mx-auto' />
					</div>
				) : (
					<>
						<CardHeader>
							<CardTitle className='text-3xl text-center mb-3'>
								¡Bienvenido!
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<div className='flex flex-col gap-6'>
										<div className='grid gap-2'>
											<FormField
												control={form.control}
												name='email'
												render={({ field }) => (
													<FormItem className='space-y-2'>
														<FormLabel>Correo electrónico</FormLabel>
														<FormControl>
															<Input
																placeholder='m@example.com'
																type='email'
																{...field}
															/>
														</FormControl>

														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<div className='grid gap-2'>
											<FormField
												control={form.control}
												name='password'
												render={({ field }) => (
													<FormItem className='space-y-2'>
														<FormLabel>Contraseña</FormLabel>
														<FormControl>
															<Input
																placeholder='********'
																type='password'
																{...field}
															/>
														</FormControl>

														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<Button
											type='submit'
											className='w-full '
											size={'lg'}
										>
											Iniciar sesión
										</Button>
									</div>
									<div className='mt-4 text-center text-sm'>
										¿No tienes una cuenta?{' '}
										<Link
											href='/auth/register'
											className='underline underline-offset-4'
										>
											Regístrate
										</Link>
									</div>
								</form>
							</Form>
						</CardContent>
					</>
				)}
			</Card>
		</div>
	);
}
