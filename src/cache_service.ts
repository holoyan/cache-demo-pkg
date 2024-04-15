import { BaseModel } from '@adonisjs/lucid/orm'

export class CacheService {
  private static modelClass: typeof BaseModel

  static setModelClass(modelClass: typeof BaseModel) {
    this.modelClass = modelClass
  }

  static async set(key: string, value: string) {
    // if record already exists by key then just update it, otherwise create new row
    await this.modelClass.updateOrCreate(
      {
        key,
      },
      {
        value,
      }
    )

    return true
  }

  static get(key: string) {
    return this.modelClass.query().where('key', key).first()
  }
}
