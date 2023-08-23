import { RegisterFormikProps } from "@src/components/registerForm/registerForm.types";
import { CoreResponse } from "@src/types/common.types";
import api from "@src/utils/axios";

export interface RegisterResponse extends CoreResponse {}

export const register = async (
  credentials: RegisterFormikProps,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    `/admins/register`,
    {'name': credentials.name, 'email':credentials.email, 'password':credentials.password},
    // credentials
  );
  return response.data;
};
