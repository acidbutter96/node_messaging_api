import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../../repositories/SettingsRepository'

import {
    ISettingsCreate,
} from './interfaces'

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {
        const repositorySettings = getCustomRepository(SettingsRepository)
        const settings = repositorySettings.create({
            chat,
            username
        })

        await repositorySettings.save(settings)

        return settings
    }

}

export default new SettingsService()