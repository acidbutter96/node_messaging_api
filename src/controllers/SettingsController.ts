import { Request, Response } from 'express'
import SettingsService from '../services/SettingsService'

class SettingsController {
    async create(req: Request, res: Response): Promise<Response> {
        const { chat, username } = req.body

        if (!chat || !username) {
            return res.status(500).json({})
        }


        try {
            const settingsService = await SettingsService.create({ chat, username })

            return res.json(settingsService)
        } catch (err) {
            return res.status(400).json({
                error: true,
                message: err.message
            })
        }
    }
}

export default new SettingsController()