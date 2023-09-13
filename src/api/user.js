import { get } from "./server";

export const getAccountById = (accountId) => get('account', { account_id: accountId });

export const getUserProfile = () => get('user/profile');
