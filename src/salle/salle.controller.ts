import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SalleService } from './salle.service';
import { Salle } from './salle.entity';
import { Cinema } from '../cinema/cinema.entity';

@Controller('salles')
export class SalleController {
  constructor(private salleService:SalleService) {
  }

  @Get('/')
  getSalles(){
    return this.salleService.getSalles();
  }
  @Get('/:id')
  getSalle(@Param() id:number){
    return this.salleService.getSalle(id);
  }

  @Post('/')
  saveSalle(@Body() data:Salle){
    return this.salleService.saveSalle(data);
  }

  @Put('/:id')
  updateSalle(@Param() id: number, @Body() data: Salle) {
    this.salleService.updateSalle(id, data);
  }

  @Delete('/:id')
  deleteSalle(@Param('id') id: number) {
    return this.salleService.deleteSalle(id);
  }

}
