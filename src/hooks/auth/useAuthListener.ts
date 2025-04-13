import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useQueryClient } from '@tanstack/react-query';

export const useAuthListener = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				// Actualiza la data de 'user'. Si no hay sesión (logout), se actualiza a null.
				queryClient.setQueryData(['user'], session?.user ?? null);
			}
		);

		// Limpieza al desmontar para evitar fugas de memoria
		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [queryClient]);
};
