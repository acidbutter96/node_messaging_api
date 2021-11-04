import { EntityRepository, Repository } from 'typeorm'

import { Setting } from '../entities/SettingEntity'

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository }