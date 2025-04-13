import { supabase } from './supabase';

interface ILogin {
	email: string;
	password: string;
}

export const login = async ({ email, password }: ILogin) => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			console.log('Error al iniciar sesión', error);
			throw error.message;
		}

		return data;
	} catch (error) {
		console.log(error);
		return false;
	}
};
