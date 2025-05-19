// in src/admin/MyLayout.tsx
import type { ReactNode } from "react";
import { CheckForApplicationUpdate, Layout } from "react-admin";

export const MyLayout = ({ children }: { children: ReactNode }) => (
  <Layout>
    {children}
    <CheckForApplicationUpdate />
  </Layout>
);
