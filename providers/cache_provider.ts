import { ApplicationService } from '@adonisjs/core/types'
import { CacheService } from '../src/cache_service.js'
import Cache from '../src/models/cache.js'

export default class CacheProvider {
  constructor(protected app: ApplicationService) {}

  register() {}

  async boot() {
    CacheService.setModelClass(Cache)
  }
}
