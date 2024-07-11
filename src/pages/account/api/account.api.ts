import Axios from "axios";
import { Account } from "./account.api-model";

const accountUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(accountUrl, account).then(({ data }) => data);
