import {  IsNotEmpty,  } from 'class-validator';

export class CreateCourierDto {
  @IsNotEmpty()
  readonly firstName: string;
  @IsNotEmpty()
  readonly lastName: string;
  @IsNotEmpty()
  readonly phoneNumber: string;
  readonly vehicleType: string;
  readonly user: string;
}