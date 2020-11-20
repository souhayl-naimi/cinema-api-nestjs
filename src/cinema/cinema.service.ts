import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cinema } from './cinema.entity';
import { Like, Repository } from 'typeorm';
import { City } from '../city/city.entity';

@Injectable()
export class CinemaService {
  constructor(@InjectRepository(Cinema) private cinemaRepository: Repository<Cinema>) {
  }

  async getCinema(id: number) {
    return await this.cinemaRepository.findOne(id);
  }

  async getCinemas(cinemaName) {
    const cinemas = this.cinemaRepository.find({
      where: [{ cinemaName: Like(`%${cinemaName}%`) }],
    });
    return cinemas;
  }

  async saveCinema(data) {
    return await this.cinemaRepository.save(data);
  }

  async updateCinema(id, data: Cinema) {
    return await this.cinemaRepository.update(id, data);
  }

  async deleteCinema(id: number) {
    return await this.cinemaRepository.delete({ id });
  }
}
