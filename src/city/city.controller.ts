import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';

@Controller('cities')
export class CityController {

  constructor(private cityService: CityService) {
  }

  @Get('/:id')
  getCity(@Param() id:number){
    return this.cityService.getCity(id);
  }
  @Get('/')
  getCities(@Query(){cityName=''}){
    return this.cityService.getCities(cityName);
  }

  @Post('/')
  createCity(@Body() data: City){
    this.cityService.saveCity(data);
  }

  @Put('/:id')
  updateCity(@Param() id:number, @Body() data:City){
    this.cityService.updateCity(id,data);
  }

  @Delete('/:id')
  deleteCourse(@Param('id') id: number) {
    return this.cityService.deleteCourse(id);
  }
}
