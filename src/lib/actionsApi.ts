import { api } from '@/config/api';

export class ActionsApi {
	static async getTranscriptions() {
		try {
			const { data } = await api.get('/transcriptions');

			console.log(data);

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Error al obtener las transcripciones');
		}
	}

	static async downloadTranscription(filename: string) {
		try {
			console.log(filename);
		} catch (error) {
			console.log(error);
			throw new Error('Error al descargar la transcrición');
		}
	}
}
