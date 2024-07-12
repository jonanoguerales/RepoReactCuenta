import {
  isStringValueInformed,
  FieldValidationResult,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
} from "@/common/validations";

export const validateType = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateName = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
