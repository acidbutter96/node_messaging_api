import { EntityRepository, Repository } from 'typeorm'

import { SettingsEntity } from '../entities/SettingsEntity'

@EntityRepository(SettingsEntity)
class SettingsRepository extends Repository<SettingsEntity> {

}

export { SettingsRepository }