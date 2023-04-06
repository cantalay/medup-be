import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { BranchEnum } from '../../common/enums/branch.enum';

export class CreateUserDto {
  @IsEmail()
  email: string | null;

  @IsString()
  fullName: string | null;

  @IsString()
  profilePhoto: string | null;

  @IsEnum(BranchEnum)
  branch: BranchEnum | null;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  bio: string | null;
}
