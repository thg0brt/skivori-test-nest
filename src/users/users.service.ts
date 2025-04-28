import { Inject, Injectable, NotFoundException  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

 	async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
		await this.usersRepository.update(id, updateUserDto);
		const updatedUser = await this.usersRepository.findOne({ where: { id } });
		
		if (!updatedUser) {
			throw new NotFoundException(`User with ID ${id} not found`);
		}

		return updatedUser;
  }

  async customSelect(where: string, bind: any): Promise<User | null> {

    const selectedUser = await this.usersRepository
    .createQueryBuilder("user")
    .where(where, bind)
    .getOne()

    return selectedUser;
  }
}