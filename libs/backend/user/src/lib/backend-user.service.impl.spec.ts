import {Test, TestingModule} from '@nestjs/testing'
import {BackendUserServiceImpl} from './backend-user.service.impl'

describe('UserService', () => {
  let service: BackendUserServiceImpl

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackendUserServiceImpl],
    }).compile()

    service = module.get<BackendUserServiceImpl>(BackendUserServiceImpl)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
