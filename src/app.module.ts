import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UserModule, GameModule, ProfileModule, GenreModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
