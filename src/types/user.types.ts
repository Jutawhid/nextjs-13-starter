/* eslint-disable no-unused-vars */
export enum UserRole {
  ADMIN = `ADMIN`,
  USER = `USER`,
}
export interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
  isVerified: boolean;
}

export type UserAccess = UserRole | `ANY`;
