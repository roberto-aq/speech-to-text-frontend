import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className='text-3xl text-center'>¡Bienvenido!</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Correo Electrónico</Label>
								<Input
									id='email'
									type='email'
									placeholder='m@example.com'
									required
								/>
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Contraseña</Label>
								</div>
								<Input id='password' type='password' required />
							</div>
							<Button type='submit' className='w-full ' size={'lg'}>
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
				</CardContent>
			</Card>
		</div>
	);
}
