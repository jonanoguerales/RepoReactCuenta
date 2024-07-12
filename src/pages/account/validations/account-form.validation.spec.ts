import * as transferFieldValidation from "./account-field.validation";
import { vi } from "vitest";
import { AccountError, AccountVM } from "../account.vm";
import { validateFormCuenta } from "./account-form.validation";
import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";

describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const account: AccountError = {
        type: "1",
        name: "Cuenta Corriente",
      };
      vi.spyOn(transferFieldValidation, "validateType").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateName").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateFormCuenta(account);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });

    it("should return false when validateType is incorrect", () => {
      // Arrange
      const account: AccountVM = {
        type: "",
        name: "Cuenta Corriente",
      };

      vi.spyOn(transferFieldValidation, "validateType").mockReturnValue({
        succeeded: false,
        errorMessage: "Debe informar el campo",
      });
      vi.spyOn(transferFieldValidation, "validateName").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateFormCuenta(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: REQUIRED_FIELD_MESSAGE,
      });
    });
    it("should return false when validateName is incorrect", () => {
      // Arrange
      const account: AccountVM = {
        type: "1",
        name: " ",
      };

      vi.spyOn(transferFieldValidation, "validateType").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateName").mockReturnValue({
        succeeded: false,
        errorMessage: "Debe informar el campo",
      });

      // Act
      const result = validateFormCuenta(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: REQUIRED_FIELD_MESSAGE,
        name: "",
      });
    });
  });
});
