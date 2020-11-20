import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cinema } from '../cinema/cinema.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cityName: string;
  @Column()
  nbreCinemas: number;
  @OneToMany(() => Cinema, cinema => cinema.city, { eager: true })
  cinemas: Cinema[];
}
