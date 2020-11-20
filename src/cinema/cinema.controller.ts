import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { Cinema } from './cinema.entity';

@Controller('cinemas')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {
  }

  @Get('/:id')
  getCinema(@Param() id: number) {
    return this.cinemaService.getCinema(id);
  }

  @Get('/')
  getCinemas(@Query(){ cinemaName = '' }) {
    return this.cinemaService.getCinemas(cinemaName);
  }

  @Post('/')
  saveCinema(@Body() data: Cinema) {
    this.cinemaService.saveCinema(data);
  }

  @Put('/:id')
  updateCinema(@Param() id: number, @Body() data: Cinema) {
    this.cinemaService.updateCinema(id, data);
  }

  @Delete('/:id')
  deleteCinema(@Param('id') id: number) {
    return this.cinemaService.deleteCinema(id);
  }
}
