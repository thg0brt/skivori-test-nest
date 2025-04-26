import { IsString, IsEmail, IsNumber, IsOptional, MaxLength, Min, Length, IsDate, IsBoolean
 } from 'class-validator';
 import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(150)
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  balance?: number;

  @IsOptional()
  @IsString()
  @Length(1, 1)
  deleted?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  lastLogin?: Date;

  @IsOptional()
  @IsNumber()
  favorite_game_id?: number;
}