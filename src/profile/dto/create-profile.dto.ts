import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  id: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'mestre dos calvos' })
  Title: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'mestreDosCalvos.png' })
  ImageURL: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '7d54f5c1-6d36-4732-990a-4dac371b5bc3' })
  userId: string;
}
