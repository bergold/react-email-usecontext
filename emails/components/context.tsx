import { createContext, useContext } from "react"

type Ctx = { foo: string }

const ctx = createContext<Ctx | null>(null);

export const Provider = ctx.Provider;

export function useCtx() {
  const c = useContext(ctx);
  if (!c) throw new Error("no ctx");
  return c;
}
