import { PropsWithChildren } from "react";
import { AuthContextProvider } from "./auth-context";
import { WebSocketContextProvider } from "./websocket-context";

export function GlobalContext({ children }: PropsWithChildren) {
  return (
    <AuthContextProvider>
      <WebSocketContextProvider>{children}</WebSocketContextProvider>
    </AuthContextProvider>
  );
}
