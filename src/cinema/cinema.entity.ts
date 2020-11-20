import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from '../city/city.entity';
import { Salle } from '../salle/salle.entity';

@Entity('cinemas')
export class Cinema {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cinemaName: string;
  @Column()
  nbrSalles: number;
  @ManyToOne(() => City, city => city.cinemas)
  city: City;
  @OneToMany(() => Salle, salle => salle.cinema,{eager:true})
  salles: Salle[];
}
