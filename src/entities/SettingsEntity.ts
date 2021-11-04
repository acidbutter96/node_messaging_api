import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, EntityColumnNotFound } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')

class SettingsEntity {
    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    chat: boolean

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { SettingsEntity }