import { ParamsDictionary } from 'express-serve-static-core'
import { NextFunction, Request, Response } from 'express'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const googleSheetController = async (
	req: Request<ParamsDictionary, any, RegisterReqBody>,
	res: Response,
	next: NextFunction
) => {
	// const result = await usersService.register(req.body)
	return res.json({
		message: 'Google controller run',
		result: { a: 'haha' }
	})
}
