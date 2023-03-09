import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly Prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const dataUser: User = { ...createUserDto };
    return this.Prisma.user.create({ data: dataUser });
  }

  findAll() {
    return this.Prisma.user.findMany();
  }

  findOne(id: string) {
    const userIdData = this.Prisma.user.findUnique({ where: { id: id } });
    return userIdData;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const dataUser: Partial<User> = { ...updateUserDto };
    return this.Prisma.user.update({ where: { id: id }, data: dataUser });
  }

  remove(id: string) {
    return this.Prisma.user.delete({ where: { id: id } });
  }
}
