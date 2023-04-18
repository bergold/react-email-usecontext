import React from "react"
import { useCtx } from './context';

export function Foo() {
  const { foo } = useCtx();
  return <div>Foo {foo}</div>;
}
