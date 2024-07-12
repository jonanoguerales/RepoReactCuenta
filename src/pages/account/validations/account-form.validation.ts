import { AccountError, AccountVM } from "../account.vm";
import { FormValidationResult } from "@/common/validations";
import { validateName, validateType } from "./account-field.validation";

export const validateFormCuenta = (
  account: AccountVM
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateName(account.type),
    validateType(account.name),
  ];

  const formValidationResult: FormValidationResult<AccountError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
