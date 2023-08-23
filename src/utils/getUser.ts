import { User } from "@src/types/user.types";
import { cookies } from "next/headers";

export const getUserFromCookie = (): any | undefined => {
  const user = cookies().get(`user`);
  console.log('user', user?.value ? JSON.parse(user?.value) : undefined);
  return user?.value ? JSON.parse(user.value) : undefined;
};
