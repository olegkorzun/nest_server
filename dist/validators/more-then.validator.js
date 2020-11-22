"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoreThen = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function MoreThen(property, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "MoreThen",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    if (value >= property)
                        return true;
                    else
                        throw new common_1.BadRequestException('Validation failed Date');
                }
            }
        });
    };
}
exports.MoreThen = MoreThen;
//# sourceMappingURL=more-then.validator.js.map