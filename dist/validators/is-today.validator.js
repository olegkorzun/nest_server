"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsToday = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsToday(property, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsToday",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    let target = new Date(value);
                    let today = new Date();
                    if (target > today)
                        return true;
                    else
                        throw new common_1.BadRequestException('Validation failed Date');
                }
            }
        });
    };
}
exports.IsToday = IsToday;
//# sourceMappingURL=is-today.validator.js.map