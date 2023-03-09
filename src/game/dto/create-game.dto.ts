import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  id: string;
  @ApiProperty({ example: 'red dead' })
  Title: string;
  @ApiProperty({
    example:
      'https://news.microsoft.com/wp-content/uploads/prod/sites/42/2020/04/RDR_XBOX_1920X1080-WIRE-5ea198f09b883-960x640.jpg',
  })
  CoverImageUrl: string;
  @ApiProperty({ example: 'a brief description about the game' })
  Description: string;
  @ApiProperty({ example: 2018 })
  Year: number;
  @ApiProperty({ example: 4.5 })
  ImdbScore: number;
  @ApiProperty({ example: 'https://www.youtube.com/watch?v=WDvFz2LL1WI' })
  TrailerYouTubeUrl: string;
  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=BoohYJlRXa8&t=2065s',
  })
  GameplayYouTubeUrl: string;
}
