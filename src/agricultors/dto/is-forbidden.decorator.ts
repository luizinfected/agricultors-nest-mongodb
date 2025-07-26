import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsForbidden(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: any) {
          return !value;
        },
        defaultMessage(): string {
          return 'Not Allowed';
        },
      },
    });
  };
}
