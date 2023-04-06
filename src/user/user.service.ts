import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log('here');
    const user: User = this.usersRepository.create(createUserDto);
    console.log(user);
    this.usersRepository.save(user).catch((err) => {
      console.log(err);
    });
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const userList: Array<User> = await this.usersRepository.find();
    if (userList.length > 0) {
      return userList;
    } else {
      throw new NotFoundException('No user found in here.');
    }
  }

  async findOne(username: string) {
    const user: User = await this.usersRepository.findOneBy({
      username: username,
    });
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found.');
    }
  }

  async findOneById(id: number) {
    const user: User = await this.usersRepository.findOneBy({ id });
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found.');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = await this.usersRepository.findOneBy({ id });
    if (user) {
      user.email = updateUserDto.email ? updateUserDto.email : user.email;
      user.bio = updateUserDto.bio ? updateUserDto.bio : user.bio;
      user.fullName = updateUserDto.fullName
        ? updateUserDto.fullName
        : user.fullName;
      user.profilePhoto = updateUserDto.profilePhoto
        ? updateUserDto.profilePhoto
        : user.profilePhoto;
      return this.usersRepository.save(user);
    } else {
      throw new NotFoundException('User not found.');
    }
  }

  async remove(id: number) {
    const user: User = await this.usersRepository.findOneBy({ id });
    if (user) {
      await this.usersRepository.delete(id);
      return user;
    } else {
      throw new NotFoundException('User not found.');
    }
  }
}
