import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly Prisma: PrismaService) {}
  create(createProfileDto: CreateProfileDto) {
    const dataProfile: Prisma.profileCreateInput = {
      user: { connect: { id: createProfileDto.userId } },
      Title: createProfileDto.Title,
      ImageURL: createProfileDto.ImageURL,
    };
    return this.Prisma.profile.create({ data: dataProfile });
  }

  findAll() {
    return this.Prisma.profile.findMany({
      select: { id: true, Title: true, favorite: { select: { id: true } } },
    });
  }

  findOne(id: string) {
    return this.Prisma.profile.findUnique({
      where: { id: id },
      select: { id: true, Title: true, favorite: true },
    });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const dataProfile: Prisma.profileCreateInput = {
      user: { connect: { id: updateProfileDto.userId } },
      Title: updateProfileDto.Title,
      ImageURL: updateProfileDto.ImageURL,
    };
    return this.Prisma.profile.update({ where: { id: id }, data: dataProfile });
  }

  remove(id: string) {
    return this.Prisma.profile.delete({ where: { id: id } });
  }
}
