import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  id: string;
  @ApiProperty({ example: 'aventura' })
  Name: string;
  @ApiProperty({
    example: [
      '1f1051b1-9192-4b56-9073-17aca1206e8b',
      '0beefcc7-98d9-4c6e-aa75-1821517dbef2',
    ],
  })
  gameId: string[];
}
