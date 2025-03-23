import { api } from '@/config/api';

export class ActionsApi {
	/* ********************************** */
	/*            UPLOAD AUDIOS           */
	/* ********************************** */
	static async uploadAudioAndTranscribe(file: File) {
		const formData = new FormData();
		formData.append('audio', file);

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
		try {
			const { data } = await api.get('/transcriptions');

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
