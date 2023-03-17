import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly Prisma: PrismaService) {}
  create(createFavoriteDto: CreateFavoriteDto) {
    const dataFavorite: Prisma.favoriteCreateInput = {
      profile: { connect: { id: createFavoriteDto.profileId } },
      game: {
        connect: createFavoriteDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };

    return this.Prisma.favorite.create({ data: dataFavorite });
  }

  findAll() {
    return this.Prisma.favorite.findMany({
      select: {
        id: true,
        game: true,
        profile: { select: { id: true, Title: true } },
      },
    });
  }

  findOne(id: string) {
    return this.Prisma.favorite.findFirst({
      where: { id: id },
      select: {
        id: true,
        game: true,
        profile: { select: { id: true, Title: true } },
      },
    });
  }

  update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    const dataFavorite: Prisma.favoriteCreateInput = {
      profile: { connect: { id: updateFavoriteDto.profileId } },
      game: {
        connect: updateFavoriteDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };
    return this.Prisma.favorite.update({
      where: { id: id },
      data: dataFavorite,
    });
  }

  remove(id: string) {
    return this.Prisma.favorite.delete({ where: { id: id } });
  }
}
