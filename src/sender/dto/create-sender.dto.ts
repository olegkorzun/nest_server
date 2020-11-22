import { IsNotEmpty } from "class-validator";

export class CreateSenderDto {
  @IsNotEmpty()
  readonly companyName: string;
  readonly user: string;
}