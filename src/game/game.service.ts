import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly Prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {
    const gameData: Game = { ...createGameDto };
    return this.Prisma.game.create({ data: gameData });
  }

  findAll() {
    return this.Prisma.game.findMany();
  }

  findOne(id: string) {
    return this.Prisma.game.findUnique({ where: { id: id } });
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    const gameDataId: Partial<Game> = { ...updateGameDto };
    return this.Prisma.game.update({ where: { id: id }, data: gameDataId });
  }

  remove(id: string) {
    return this.Prisma.game.delete({ where: { id: id } });
  }
}
