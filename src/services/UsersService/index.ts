import { getCustomRepository } from 'typeorm'

import { UsersRepository } from '../../repositories/UsersRepository'

import {
    IUsersCreate
} from './interfaces'

class UsersService {
    async create({ email }: IUsersCreate) {
        const userRepository = getCustomRepository(UsersRepository)

        const userExists = await userRepository.findOne({
            email
        })

        if (userExists) {
            return userExists
        }

        const user = userRepository.create({
            email
        })

        try {
            await userRepository.save(user)
        } catch (err) {
            throw new Error('An error has occurred while saving, try again later')
        }

        return user
    }
}

export default new UsersService()