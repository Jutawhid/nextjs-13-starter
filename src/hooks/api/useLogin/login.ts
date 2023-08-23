import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { CoreResponse } from "@src/types/common.types";
import { User } from "@src/types/user.types";
import api from "@src/utils/axios";

export interface LoginResponse extends CoreResponse {
  data: User | undefined;
}

export const login = async (
  credentials: LoginFormikProps,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(`/admins/login`, credentials);
  console.log('response', response?.data);
  return response?.data;
};
