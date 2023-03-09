import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  id?: string;
  @ApiProperty({ example: '000.000.000-00' })
  CPF: string;
  @ApiProperty({ example: '1234567' })
  Password: string;
  @ApiProperty({ example: 'chiquinho' })
  userName: string;
  @ApiProperty({ example: 'chiquinho@gmail.com' })
  email: string;
  @ApiProperty({ example: 'admin' })
  role: string;
}
