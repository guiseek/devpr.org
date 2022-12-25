import {Controller, Get, Body, Patch, Param, Delete} from '@nestjs/common'
import {BackendUserService, UpdateUserDto} from '@devpr.org/backend/api'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class BackendUserController {
  constructor(private readonly userService: BackendUserService) {}

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
