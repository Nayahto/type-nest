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
  @ApiProperty({ example: '0b0f37c9-ea3c-46a8-8663-864a0985d20f' })
  userId: string;
}
