import { Request, Response } from 'express'
import SettingsService from '../services/SettingsService'

class SettingsController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body

        if (!chat || !username) {
            return res.status(500).json({})
        }

        const settingsService = SettingsService.create({ chat, username })

        return res.json(settingsService)
    }
}

export default new SettingsController()