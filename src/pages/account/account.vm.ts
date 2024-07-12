export interface AccountVM {
  type: string;
  name: string;
}
export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): AccountVM => ({
  type: "",
  name: "",
});
export const createEmptyAccountError = (): AccountError => ({
  type: "",
  name: "",
});
