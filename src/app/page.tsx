import { Navbar } from '@/components';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Navbar />

			<main className='flex flex-col items-center justify-center w-full min-h-screen text-white'>
				{/* HERO SECTION */}
				<section className='w-full max-w-6xl px-4 py-16 mx-auto flex flex-col md:flex-row items-center gap-8'>
					{/* Texto principal */}
					<div className='flex-1 space-y-5'>
						<h1 className='text-4xl md:text-5xl font-bold leading-tight'>
							Convierte tu voz en texto
							<span className='block'>fácilmente</span>
						</h1>
						<p className='text-lg text-neutral-300'>
							Subir tu archivo de audio nunca fue tan sencillo.
							Convierte y comparte tus transcripciones con amigos o
							colegas al instante.
						</p>
						<div className='mt-6'>
							<Link href='/auth/login'>
								<Button variant='default' size='lg'>
									Subir Archivo
								</Button>
							</Link>
						</div>
					</div>

					{/* Imagen o Placeholder */}
					<div className='flex-1 flex justify-center'>
						<Image
							src='/img-home-1.png' // Reemplaza con tu imagen
							alt='Hero'
							width={300}
							height={350}
							className='object-cover rounded-2xl'
						/>
					</div>
				</section>

				<Separator className='my-8 w-full max-w-6xl' />

				{/* FEATURES SECTION */}
				<section className='w-full max-w-6xl px-4 py-16 mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold mb-10'>
						¿Por qué usar TxtSpeechy?
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* Primer feature */}
						<Card className='bg-neutral-900'>
							<CardHeader>
								<CardTitle>Funcionalidad de Carga de Audio</CardTitle>
								<CardDescription>
									Sube múltiples formatos de audio
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-neutral-400'>
									Soporta .mp3, .wav, .m4a y más. Procesa rápidamente
									y obtiene tu texto en segundos.
								</p>
							</CardContent>
						</Card>

						{/* Segundo feature */}
						<Card className='bg-neutral-900'>
							<CardHeader>
								<CardTitle>Rapidez y Precisión</CardTitle>
								<CardDescription>
									Algoritmos mejorados
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-neutral-400'>
									Aprovechamos modelos de IA para garantizar
									transcripciones con alta precisión.
								</p>
							</CardContent>
						</Card>

						{/* Tercer feature */}
						<Card className='bg-neutral-900'>
							<CardHeader>
								<CardTitle>Comparte tus transcripciones</CardTitle>
								<CardDescription>
									Exporta o comparte en un click
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-neutral-400'>
									Genera enlaces o descargas en PDF, Word o texto
									plano.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				<Separator className='my-8 w-full max-w-6xl' />

				{/* FINAL CTA */}
				<section className='w-full max-w-6xl px-4 py-16 mx-auto text-center'>
					<h2 className='text-2xl md:text-3xl font-semibold mb-4'>
						¿Listo para convertir tu voz en texto?
					</h2>
					<p className='text-neutral-300 mb-8'>
						Haz clic en el botón para comenzar con tu primera
						transcripción.
					</p>
					<Link href='/auth/login'>
						<Button variant='outline' size='lg'>
							Empezar Ahora
						</Button>
					</Link>
				</section>
			</main>
		</div>
	);
}
