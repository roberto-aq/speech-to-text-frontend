import { api } from '@/config/api';
import { supabase } from './supabase';

export class ActionsApi {
	/**
	 * Método privado para obtener el user id desde Supabase.
	 * Lanza un error si no se puede obtener el usuario autenticado.
	 */
	private static async getUserId(): Promise<string> {
		const { data, error } = await supabase.auth.getUser();

		if (error || !data?.user) {
			throw new Error('No se pudo obtener el usuario autenticado.');
		}
		return data.user.id;
	}
	/* ********************************** */
	/*            UPLOAD AUDIOS           */
	/* ********************************** */
	static async uploadAudioAndTranscribe(file: File) {
		const userId = await ActionsApi.getUserId();

		const formData = new FormData();
		formData.append('audio', file);
		formData.append('user_id', userId);

		try {
			const { data } = await api.post(
				'/files/upload-audio',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al subir el archivo de audio');
		}
	}

	/* ********************************** */
	/*     TRANSCRIPTIONS OR DOCUMENTS    */
	/* ********************************** */
	static async getTranscriptions() {
		const userId = await ActionsApi.getUserId();

		try {
			const { data } = await api.get(`/transcriptions/${userId}`);

			console.log(data);

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al obtener las transcripciones');
		}
	}

	static async downloadTranscription(filename: string) {
		try {
			const { data } = await api.get(
				`/transcriptions/download/${filename}`,
				{
					responseType: 'blob',
				}
			);

			const url = window.URL.createObjectURL(new Blob([data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();
		} catch (error) {
			console.log(error);
			throw new Error('Error al descargar la transcrición');
		}
	}

	static async deleteTranscription(filename: string) {
		try {
			const { data } = await api.delete(
				`/transcriptions/delete/${filename}`
			);

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al eliminar la transcripción');
		}
	}

	/* ********************************** */
	/*               API KEY              */
	/* ********************************** */
	static async getApiKey() {
		try {
			const { data } = await api.get('/settings/api-key');

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al obtener la clave de la API');
		}
	}

	static async updateApiKey(apiKey: string) {
		try {
			const { data } = await api.post('/settings/update-api-key', {
				newApiKey: apiKey,
			});

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al actualizar la clave de la API');
		}
	}
}
