import { IncomingMessage } from 'http';
import anylogger from 'anylogger';
import parsefiles from '@mmstudio/an000041';
import up from '@mmstudio/an000043';

const logger = anylogger('@mmstudio/an000045');

export default async function upload(req: IncomingMessage, encrypt: boolean) {
	logger.debug('start uploading files');
	const files = await parsefiles(req);
	logger.debug('files:', files);
	const uploaded = await up(files.map((it) => {
		return {
			...it,
			meta: {}
		};
	}), encrypt);
	logger.info('upload all!');
	return uploaded;
}
