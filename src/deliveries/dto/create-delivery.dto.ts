import {  IsCurrency, IsDate, IsDateString, IsNumberString, IsPositive, IsString, MinDate } from 'class-validator';
import { IsToday } from 'src/validators/is-today.validator';
import { MoreThen } from 'src/validators/more-then.validator';

export class CreateDeliveryDto {

  @IsNumberString()
  @MoreThen('1')
  packageSize: number;

  @IsNumberString()
  cost: number;

  @IsString()
  description: string;

  @IsToday('after')
  date: Date;

  sender: String;
  courier: String;
}