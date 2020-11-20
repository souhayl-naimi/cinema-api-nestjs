import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cinema } from '../cinema/cinema.entity';

@Entity('salles')
export class Salle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nbrPlaces: number;
  @ManyToOne(() => Cinema, cinema => cinema.salles)
  cinema: Cinema;
}
