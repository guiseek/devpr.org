import {
  User,
  CreateUserDto,
  UpdateUserDto,
  BackendUserService,
} from '@devpr.org/backend/api'
import {Repository} from 'typeorm'

export class BackendUserServiceImpl implements BackendUserService {
  constructor(private userRepository: Repository<User>) {}

  async findAll() {
    return this.userRepository.find()
  }

  async createOne(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  async findOne(username: string) {
    return this.userRepository.findOneBy({username})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({id})

    return this.userRepository.save({...user, ...updateUserDto})
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({id})

    return this.userRepository.remove(user)
  }
}
