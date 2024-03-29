import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly Prisma: PrismaService) {}
  create(createGenreDto: CreateGenreDto) {
    const dataGenre: Prisma.genreCreateInput = {
      Name: createGenreDto.Name,
      game: {
        connect: createGenreDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };
    return this.Prisma.genre.create({ data: dataGenre });
  }

  findAll() {
    return this.Prisma.genre.findMany({
      select: { id: true, Name: true, game: true },
    });
  }

  findOne(id: string) {
    return this.Prisma.genre.findFirst({
      where: { id: id },
      select: { id: true, Name: true, game: true },
    });
  }

  update(id: string, updateGenreDto: UpdateGenreDto) {
    const dataGenre: Prisma.genreCreateInput = {
      Name: updateGenreDto.Name,
      game: {
        connect: updateGenreDto.gameId.map((gameId) => ({ id: gameId })),
      },
    };
    return this.Prisma.genre.update({ where: { id: id }, data: dataGenre });
  }

  remove(id: string) {
    return this.Prisma.genre.delete({ where: { id: id } });
  }
}
