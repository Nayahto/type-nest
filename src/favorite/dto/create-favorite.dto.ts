import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
export class CreateFavoriteDto {
  id: string;
  @IsString()
  @ApiProperty({ example: 'e48853a2-7394-4e54-bd93-4326fc4868e7' })
  profileId: string;
  @ApiProperty({ example: ['1f1051b1-9192-4b56-9073-17aca1206e8b'] })
  @IsArray()
  gameId: string[];
}
