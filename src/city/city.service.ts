import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private cityRepository: Repository<City>) {
  }

  async getCity(id: number) {
    return await this.cityRepository.findOne(id);
  }

  async getCities(cityName) {
    const cities = this.cityRepository.find({
      where: [{ cityName: Like(`%${cityName}%`) }],
    });
    return cities;
  }

  async saveCity(data) {
    return await this.cityRepository.save(data);
  }

  async updateCity(id,data: City) {
    return await this.cityRepository.update(id, data);
  }

  async deleteCourse(id: number) {
    return await this.cityRepository.delete({ id });
  }

}
