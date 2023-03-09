import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateGameDto {
  id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'red dead' })
  Title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'https://news.microsoft.com/wp-content/uploads/prod/sites/42/2020/04/RDR_XBOX_1920X1080-WIRE-5ea198f09b883-960x640.jpg',
  })
  CoverImageUrl: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'a brief description about the game' })
  Description: string;

  @IsNotEmpty()
  @Min(2000)
  @Max(2100)
  @IsNumber()
  @ApiProperty({ example: 2018 })
  Year: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(5)
  @ApiProperty({ example: 4.5 })
  ImdbScore: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'https://www.youtube.com/watch?v=WDvFz2LL1WI' })
  TrailerYouTubeUrl: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=BoohYJlRXa8&t=2065s',
  })
  GameplayYouTubeUrl: string;
}
