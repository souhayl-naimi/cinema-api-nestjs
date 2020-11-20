import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Salle } from './salle.entity';
import { Cinema } from '../cinema/cinema.entity';

@Injectable()
export class SalleService {
  constructor(@InjectRepository(Salle) private salleRepository:Repository<Salle>) {
  }

  async getSalle(id){
    return await this.salleRepository.findOne(id);
  }

  async getSalles(){
    return await this.salleRepository.find();
  }

  async saveSalle(data: Salle) {
    return await this.salleRepository.save(data);
  }

  async updateSalle(id, data: Salle) {
    return await this.salleRepository.update(id, data);
  }

  async deleteSalle(id: number) {
    return await this.salleRepository.delete({ id });
  }
}
