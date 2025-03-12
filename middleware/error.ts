import express from 'express';

export const errorHandler =
    (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.error(err.stack);
        res.status(err.status || 500).json({
            message: err.message || 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? err : {}
        });
    }