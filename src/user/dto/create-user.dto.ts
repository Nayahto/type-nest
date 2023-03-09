import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id?: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '000.000.000-00' })
  CPF: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1234567' })
  Password: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'chiquinho' })
  userName: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'chiquinho@gmail.com' })
  email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'admin' })
  role: string;
}
