import { Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../city/city.entity';
import { Cinema } from './cinema.entity';

@Module({imports:
  [TypeOrmModule.forFeature([Cinema])],
  controllers: [CinemaController],
  providers: [CinemaService]
})
export class CinemaModule {}
