import {CreateUserDto} from '../dto/create-user.dto'
import {UpdateUserDto} from '../dto/update-user.dto'
import {User} from '../interfaces/user.interface'

export abstract class BackendUserService {
  abstract findAll(): Promise<User[]>
  abstract createOne(createUserDto: CreateUserDto): Promise<User>
  abstract findOne(username: string): Promise<User>
  abstract update(id: number, updateUserDto: UpdateUserDto): Promise<User>
  abstract remove(id: number): Promise<User>
}
