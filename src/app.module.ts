import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// @ts-ignore
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { CinemaModule } from './cinema/cinema.module';
import { Cinema } from './cinema/cinema.entity';
import { City } from './city/city.entity';
import { SalleModule } from './salle/salle.module';
import { Salle } from './salle/salle.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: '',
    database: 'nestcinema',
    entities: [City,Cinema,Salle]
  }), CityModule, CinemaModule, SalleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
