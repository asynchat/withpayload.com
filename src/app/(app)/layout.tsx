import "./globals.css";
import "@mantine/core/styles.css";

import { ReactNode } from "react";

import { AppLayout } from "@/app/(app)/AppLayout";
import { Providers } from "@/app/(app)/Providers";
import { Toaster } from "sonner";

interface LayoutProps {
  children: ReactNode;
}

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout = async ({ children }: LayoutProps) => {

  return (
    <html>

      <body>
        <Toaster />

        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
