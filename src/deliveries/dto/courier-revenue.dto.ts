import { IsToday } from '../../validators/is-today.validator';
export class CourierRevenueDto {

  @IsToday('before')
  start:Date;

  @IsToday('before')
  end:Date;

}