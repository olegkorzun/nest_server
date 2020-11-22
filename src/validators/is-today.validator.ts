import { BadRequestException } from "@nestjs/common";
import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
 
export function IsToday(property?: string, validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsToday",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = (args.object as any)[relatedPropertyName];
                    let target = new Date(value);
                    let today = new Date();
                    if (target>today) return true
                    else throw new BadRequestException('Validation failed Date');
                }
            }
        });
   };
}