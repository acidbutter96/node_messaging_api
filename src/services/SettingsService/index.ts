import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../../repositories/SettingsRepository'

import {
    ISettingsCreate,
} from './interfaces'

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {
        const repositorySettings = getCustomRepository(SettingsRepository)
        const userAlreadyExists = await repositorySettings.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const settings = repositorySettings.create({
            chat,
            username
        })

        await repositorySettings.save(settings)

        return settings
    }

}

export default new SettingsService()