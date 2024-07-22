import { Router } from 'express'
import { googleSheetController } from '~/controllers/google.controllers'
import { wrapRequestHandler } from '~/utils/handlers'

const googleRouter = Router()

googleRouter.get('/google-sheet', wrapRequestHandler(googleSheetController))

export default googleRouter
