import bodyParser from 'body-parser';
import express from 'express';
import api from './routes';

class app {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.setMiddlewares();
		this.setRoutes();
		this.catchErrors();
	}

	private setMiddlewares(): void {
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	private setRoutes(): void {
		this.express.use('/', api);
	}

	private catchErrors(): void {
		// this.express.use(errorHandler.notFound);
		// this.express.use(errorHandler.internalServerError);
	}
}

export default new app().express;
