import { ReactNode } from "react";
import { PrimaryColorProvider } from "react-native-simi-comps";

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <PrimaryColorProvider value="#1471eb">{children}</PrimaryColorProvider>
  );
}
