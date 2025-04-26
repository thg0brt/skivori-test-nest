import { IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';


export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsNumber()
  balance?: number;

  @IsOptional()
  @IsNumber()
  favorite_game_id?: number;
}