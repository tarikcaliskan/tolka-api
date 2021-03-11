import * as httpStatus from 'http-status';
import express, { Request, Response, NextFunction } from 'express';

// handle not found errors
export const notFound = (req: express.Request, res: express.Response, next: NextFunction) => {
	res.status(httpStatus.NOT_FOUND);
	res.json({
		success: false,
		message: 'Requested Resource Not Found',
	});
	res.end();
};

type ErrorType = {
	status: number;
	extra?: any; // eslint-disable-line
	message: string;
};

export const internalServerError = (
	err: ErrorType,
	req: express.Request,
	res: express.Response,
	next: NextFunction
) => {
	res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
	res.json({
		message: err.message,
		extra: err.extra,
	});
	res.end();
};
