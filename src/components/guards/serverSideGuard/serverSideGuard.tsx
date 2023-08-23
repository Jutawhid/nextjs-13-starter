import { getUserFromCookie } from "@src/utils/getUser";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { ServerSideGuardProps } from "./serverSideGuard.types";

const ServerSideGuard: FC<PropsWithChildren<ServerSideGuardProps>> = ({
  children,
  role = `admin`,
}) => {
  const user = getUserFromCookie();

  if (!user || (role !== `ANY` && user.role !== role)) {
    notFound();
  }

  console.log('user', user);

  return <>{children}</>;
};

export default ServerSideGuard;
