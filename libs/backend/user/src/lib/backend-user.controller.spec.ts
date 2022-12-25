import {Test, TestingModule} from '@nestjs/testing'
import {BackendUserController} from './backend-user.controller'
import {BackendUserService} from './backend-user.service'

describe('UserController', () => {
  let controller: BackendUserController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackendUserController],
      providers: [BackendUserService],
    }).compile()

    controller = module.get<BackendUserController>(BackendUserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
