import { validateName, validateType } from "./account-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateType", () => {
    it("should return false when type is not informed", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateName(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
    });

    it("should return true when the type is entered", () => {
      // Arrange
      const value = "Cuenta Corriente";

      // Act
      const result = validateName(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateName", () => {
    it("should return false when type is not informed", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateType(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
    });

    it("should return true when the name is entered", () => {
      // Arrange
      const value = "Cuenta Corriente";

      // Act
      const result = validateType(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
