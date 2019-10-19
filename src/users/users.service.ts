import { Injectable, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from '../entitys/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {

    const findedUser = await this.userRepository.findOne(id);

    if (!findedUser) {
      throw new BadRequestException('Usuário inexistente!');
    }

    this.userRepository.delete(id);
  }
}
